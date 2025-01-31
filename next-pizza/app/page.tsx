import { Categories, Container, Filters, SortPopup, Title, TopBar } from '@/components/shared';

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="All Pizzas" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="pb-14">
        <div className="flex gap-[60px]">
          {/* Filtering */}
          <div className="w-[250px]">
            <Filters />
          </div>
          {/* list of products */}
          <div className='flex-1 flex-col gap-16'>List of products</div>
        </div>
      </Container>
    </>
  );
}
