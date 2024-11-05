import Ads from "../components/Ads";
import BottomNav from "../components/BottomNav";
import NavBar from "../components/NavBar";
import ScrollTile from "../components/ScrollTile";
import kids from "../data/kids";

const Kids = () => {
  return (
    <>
      <NavBar />
      <section className=" bg-[#f3f3f3f3] py-10">
        <h1 className="text-4xl font-bold py-2 p-section">Kids' Latest</h1>
        <div className=" flex flex-wrap gap-5 justify-around pb-5 p-section">
          {kids.slice(0, 6).map((item, index) => (
            <ScrollTile
              key={index}
              image={item.image}
              price={item.price}
              name={item.name}
            />
          ))}
        </div>
        <Ads nam="Men's Collection" img1="/menad2.png" img2="/menad1.png" link="/men" />
        <h1 className="text-4xl font-bold py-4 p-section">Featured</h1>
        <div className=" flex flex-wrap gap-5 justify-around pyb-10 p-section">
          {kids.slice(1, 7).map((item, index) => (
            <ScrollTile
              key={index}
              image={item.image}
              price={item.price}
              name={item.name}
            />
          ))}
        </div>{" "}
        <div className="pt-7"></div>
        <h1 className="text-4xl font-bold py-4 p-section mt-5">Casual</h1>
        <div className=" flex flex-wrap gap-5 justify-around pyb-10 p-section">
          {kids.slice(0, 6).map((item, index) => (
            <ScrollTile
              key={index}
              image={item.image}
              price={item.price}
              name={item.name}
            />
          ))}
        </div>
      </section>
      <Ads nam="Womens' Collection" img1="/womanad2.png" img2="/womanad1.png"  link ="/women"/>
      <br />
      <br />


      <BottomNav />
    </>
  );
};

export default Kids;
