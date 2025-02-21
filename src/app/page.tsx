import { Categories, Container, Filters, ProductCard, ProductsGroupLists, Title, TopBar } from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="All pizzas" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">

          {/* the left side  */}
          <div className="w-[250px]">
            <Filters />
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16"> 
              <ProductsGroupLists title={"Pizzas"} categoryId={1} items={[{
                id: 1,
                name: "Mushroom pizza",
                imageUrl: "https://media.dodostatic.net/image/r:584x584/01945f8b83c47656afab822b4ef315e6.avif",
                items: [
                  {price: 479},
                  {price: 680},
                  {price: 780},
                ]
              },
              {
                id: 2,
                name: "Double pizza",
                imageUrl: "https://media.dodostatic.net/image/r:584x584/01945f8b83c47656afab822b4ef315e6.avif",
                items: [
                  {price: 479},
                  {price: 680},
                  {price: 780},
                ]
              },{
                id: 3,
                name: "Cheese pizza",
                imageUrl: "https://media.dodostatic.net/image/r:584x584/01945f8b83c47656afab822b4ef315e6.avif",
                items: [
                  {price: 479},
                  {price: 680},
                  {price: 780},
                ]
              },{
                id: 4,
                name: "Nice pizza",
                imageUrl: "https://media.dodostatic.net/image/r:584x584/01945f8b83c47656afab822b4ef315e6.avif",
                items: [
                  {price: 479},
                  {price: 680},
                  {price: 780},
                ]
              },]} />
              <ProductsGroupLists title={"Snaks"} categoryId={2} items={[{
                id: 1,
                name: "Mushroom pizza",
                imageUrl: "https://media.dodostatic.net/image/r:584x584/01945f8b83c47656afab822b4ef315e6.avif",
                items: [
                  {price: 479},
                  {price: 680},
                  {price: 780},
                ]
              },
              {
                id: 2,
                name: "Double pizza",
                imageUrl: "https://media.dodostatic.net/image/r:584x584/01945f8b83c47656afab822b4ef315e6.avif",
                items: [
                  {price: 479},
                  {price: 680},
                  {price: 780},
                ]
              },{
                id: 3,
                name: "Cheese pizza",
                imageUrl: "https://media.dodostatic.net/image/r:584x584/01945f8b83c47656afab822b4ef315e6.avif",
                items: [
                  {price: 479},
                  {price: 680},
                  {price: 780},
                ]
              },{
                id: 4,
                name: "Nice pizza",
                imageUrl: "https://media.dodostatic.net/image/r:584x584/01945f8b83c47656afab822b4ef315e6.avif",
                items: [
                  {price: 479},
                  {price: 680},
                  {price: 780},
                ]
              },]} />
            </div>
          </div>
        </div>
      </Container>
    </>

  );
}
