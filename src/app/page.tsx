import { Categories, Container, Filters, Title, TopBar } from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="All pizzas" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">

          {/* the left side  */}
          <div className="w-[250px]">
                <Filters/>
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16"> List of products</div>
          </div>
        </div>
      </Container>
    </>

  );
}
