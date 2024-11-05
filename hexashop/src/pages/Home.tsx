import BottomNav from "../components/BottomNav";
import Button from "../components/Button";
import Cards from "../components/Cards";
import NavBar from "../components/NavBar";
import ScrollTile from "../components/ScrollTile";
import kids from "../data/kids";
import men from "../data/men";
import women from "../data/women";
const Home = () => {
  return (
    <>
      <NavBar />

      <div className="p-section flex h-[100vh] gap-5 my-10">
        <div className="relative bg-[url('/women/women1.png')] bg-cover bg-center w-full text-center flex-col place-content-center h-screen">
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-start justify-center h-full gap-10 p-10">
            <h1 className="text-5xl text-white font-black">We Are Hexashop</h1>
            <p className="text-white mt-4 text-start">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <Button content="Purchase Now" />
          </div>
        </div>

        <div className="grid grid-cols-2 w-full gap-5 h-full">
          <Cards name="Men" image="/men/man1.png" link="/men"/>
          <Cards name="Women" image="/women/woman2.png" link="/women" />
          <Cards name="Kids" image="/kid/kid1.png" link="/kids" />
          <Cards name="Accessories" image="accessories.png" link="" />
        </div>
      </div>

      <section className="bg-[#E9E9E9] w-full h-fit p-section pb-10">
        <h1 className="text-4xl font-bold pt-10 pb-5">Men's Latest</h1>
        <p className="text-sm">
          Lorem Ipsum is simply dummy text of the printingand typesetting
          industry.
        </p>

        <div className="w-full overflow-x-auto mt-5">
          <div className="flex space-x-4">
            {men.map((item, index) => (
              <ScrollTile
                key={index}
                image={item.image}
                price={item.price}
                name={item.name}
              />
            ))}
          </div>
        </div>

        <h1 className="text-4xl font-bold pt-20 pb-5">Women's Latest</h1>
        <p className="text-sm">
          Lorem Ipsum is simply dummy text of the printingand typesetting
          industry.
        </p>

        <div className="w-full overflow-x-auto pt-5">
          <div className="flex space-x-4">
            {women.map((item, index) => (
              <ScrollTile
                key={index}
                name={item.name}
                image={item.image}
                price={item.price}
              />
            ))}
          </div>
        </div>

        <h1 className="text-4xl font-bold pt-20 pb-5">Kid's Latest</h1>
        <p className="text-sm">
          Lorem Ipsum is simply dummy text of the printingand typesetting
          industry.
        </p>

        <div className="w-full overflow-x-auto pt-5">
          <div className="flex space-x-4">
            {kids.map((item, index) => (
              <ScrollTile
                key={index}
                name={item.name}
                image={item.image}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="h-[640px] p-section ">
        <div className="h-full flex items-center my-10">
          <div className="w-full text-[12px] place-content-center pe-9">
            <h1 className="text-2xl font-bold text-center">
              Explore Our Products
            </h1>
            <p className="py-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <p className="py-2">
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including
              versions of Lorem IpsuLorem Ipsum is{" "}
              <span className="font-bold">
                simply dummy text of the printing and typesetting industry.
              </span>{" "}
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged.
            </p>
            <p className="py-2">
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including
              versions of Lorem IpsuLorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsu
            </p>
          </div>
          <div className="w-full grid grid-cols-2 gap-3 h-full">
            <div className="bg-[url('/bag.png')] flex flex-col h-full w-full bg-cover text-center justify-center">
              <h1 className="text-2xl font-bold text-center">Leather Bags</h1>
              <p className="text-md">Lorem ipsum is simply dummy text</p>
            </div>
            <div className="bg-[url('/laces.png')] h-full w-full bg-cover"></div>
            <div className="bg-[url('/woman.png')] h-full w-full bg-cover"></div>
            <div className="bg-[url('/shirts.png')] flex flex-col h-full w-full bg-cover text-center justify-center">
              <h1 className="text-2xl font-bold text-center">Differnt types</h1>
              <p className="text-md">Lorem ipsum is simply dummy text</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#E9E9E9] h-fit p-section py-10 mt-10">
        <h1 className="text-2xl font-bold">Social Media</h1>
        <p className="text-md">
          Lorem Ipsum is simply dummy text of the printingand typesetting
          industry.
        </p>

        <div className="flex h-72 justify-between py-5">
          <img src="/social1.png" alt="social1" />
          <img src="/social2.png" alt="social2" />
          <img src="/social3.png" alt="social3" />
          <img src="/social4.png" alt="social4" />
          <img src="/social5.png" alt="social5" />
          <img src="/social6.png" alt="social6" />
        </div>
      </section>

      <BottomNav />
    </>
  );
};

export default Home;
