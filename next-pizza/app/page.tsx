import { Container, Filters, ProductsGroupList, Title, TopBar } from '@/components/shared';

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="All Pizzas" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="pb-14">
        <div className="flex gap-[80px]">
          {/* Filtering */}
          <div className="w-[250px]">
            <Filters />
          </div>
          {/* list of products */}
          <div className="flex-1 flex-col gap-16">
            <ProductsGroupList
              title="Pizzas"
              items={[
                {
                  id: 1,
                  name: 'Mozzarella',
                  price: 10,
                  imageUrl:
                    'https://media.dodostatic.com/image/r:292x292/11ef230cdfedcbb2b5eaa49ee3d1af43.avif',
                  items: [{ price: 10 }],
                },
                {
                  id: 2,
                  name: 'Mozzarella',
                  price: 10,
                  imageUrl:
                    'https://media.dodostatic.com/image/r:292x292/11ef230cdfedcbb2b5eaa49ee3d1af43.avif',
                  items: [{ price: 10 }],
                },
                {
                  id: 3,
                  name: 'Mozzarella',
                  price: 10,
                  imageUrl:
                    'https://media.dodostatic.com/image/r:292x292/11ef230cdfedcbb2b5eaa49ee3d1af43.avif',
                  items: [{ price: 10 }],
                },
                {
                  id: 4,
                  name: 'Mozzarella',
                  price: 10,
                  imageUrl:
                    'https://media.dodostatic.com/image/r:292x292/11ef230cdfedcbb2b5eaa49ee3d1af43.avif',
                  items: [{ price: 10 }],
                },
                {
                  id: 5,
                  name: 'Mozzarella',
                  price: 10,
                  imageUrl:
                    'https://media.dodostatic.com/image/r:292x292/11ef230cdfedcbb2b5eaa49ee3d1af43.avif',
                  items: [{ price: 10 }],
                },
              ]}
              categoryId={1}
              className=""
              listClassName=""
            />

            <ProductsGroupList
              title="Combo"
              items={[
                {
                  id: 6,
                  name: 'Combo Pizzas',
                  price: 10,
                  imageUrl:
                    'https://media.dodostatic.com/image/r:292x292/11ef230cdfedcbb2b5eaa49ee3d1af43.avif',
                  items: [{ price: 10 }],
                },
                {
                  id: 7,
                  name: 'Combo Pizzas',
                  price: 10,
                  imageUrl:
                    'https://media.dodostatic.com/image/r:292x292/11ef230cdfedcbb2b5eaa49ee3d1af43.avif',
                  items: [{ price: 10 }],
                },
                {
                  id: 8,
                  name: 'Combo Pizzas',
                  price: 10,
                  imageUrl:
                    'https://media.dodostatic.com/image/r:292x292/11ef230cdfedcbb2b5eaa49ee3d1af43.avif',
                  items: [{ price: 10 }],
                },
                {
                  id: 9,
                  name: 'Combo Pizzas',
                  price: 10,
                  imageUrl:
                    'https://media.dodostatic.com/image/r:292x292/11ef230cdfedcbb2b5eaa49ee3d1af43.avif',
                  items: [{ price: 10 }],
                },
                {
                  id: 10,
                  name: 'ComboMozzarella',
                  price: 10,
                  imageUrl:
                    'https://media.dodostatic.com/image/r:292x292/11ef230cdfedcbb2b5eaa49ee3d1af43.avif',
                  items: [{ price: 10 }],
                },
              ]}
              categoryId={2}
              className=""
              listClassName=""
            />
          </div>
        </div>
      </Container>
    </>
  );
}
