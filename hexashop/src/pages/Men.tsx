import Ads from "../components/Ads";
import BottomNav from "../components/BottomNav";
import NavBar from "../components/NavBar";
import ScrollTile from "../components/ScrollTile";
import men from "../data/men";

const Men = () => {
  return (
    <>
      <NavBar />
      <section className="p-section bg-[#f3f3f3f3] py-10">
        <h1 className="text-4xl font-bold py-2">Men's Latest</h1>
        <div className=" flex flex-wrap gap-5 justify-around pb-5">
          {men.slice(0, 6).map((item, index) => (
            <ScrollTile
              key={index}
              image={item.image}
              price={item.price}
              name={item.name}
            />
          ))}
        </div>
        <h1 className="text-4xl font-bold py-4">Featured</h1>
        <div className=" flex flex-wrap gap-5 justify-around pyb-10">
          {men.slice(4, 11).map((item, index) => (
            <ScrollTile
              key={index}
              image={item.image}
              price={item.price}
              name={item.name}
            />
          ))}
        </div>{" "}
        <h1 className="text-4xl font-bold py-4">Casual</h1>
        <div className=" flex flex-wrap gap-5 justify-around pyb-10">
          {men.slice(3, 9).map((item, index) => (
            <ScrollTile
              key={index}
              image={item.image}
              price={item.price}
              name={item.name}
            />
          ))}
        </div>
      </section>
      <Ads nam="Kid's Collection" img1="kidad1.png" img2="kidad2.png" link="kids"/>
      <br /><br />

      <BottomNav />
    </>
  );
};

export default Men;
