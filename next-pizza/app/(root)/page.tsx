import { Container, Filters, ProductsGroupList, Title, TopBar } from '@/shared/components/shared';
import { prisma } from '@/prisma/prisma-client';

export default async function Home() {
  const categories = await prisma.category.findMany({
    include: {
      products: {
        include: {
          items: true,
          ingredients: true,
        },
      },
    },
  });

  return (
    <>
      <Container className="mt-10">
        <Title text="All Pizzas" size="lg" className="font-extrabold" />
      </Container>
      <TopBar categories={categories.filter((category) => category.products.length > 0)} />
      <Container className="pb-14">
        <div className="flex gap-[80px]">
          {/* Filtering */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* list of products */}
          <div className="flex-1 flex-col gap-16">
            {categories.map(
              (category) =>
                category.products.length > 0 && (
                  <ProductsGroupList
                    key={category.id}
                    title={category.name}
                    items={category.products}
                    categoryId={category.id}
                  />
                )
            )}
          </div>
        </div>
      </Container>
    </>
  );
}
