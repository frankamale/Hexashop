import Ads from "../components/Ads";
import BottomNav from "../components/BottomNav";
import NavBar from "../components/NavBar";
import ScrollTile from "../components/ScrollTile";
import women from "../data/women";

const Men = () => {
  return (
    <>
      <div className="bg-[#f3f3f3f3] cl">
        <NavBar />
        <section className="  py-10">
          <h1 className="text-4xl font-bold py-2 p-section">Women's Latest</h1>
          <div className=" flex flex-wrap gap-5 justify-around pb-5 p-section">
            {women.slice(0, 6).map((item, index) => (
              <ScrollTile
                key={index}
                image={item.image}
                price={item.price}
                name={item.name}
              />
            ))}
          </div>
          <h1 className="text-4xl font-bold py-4 p-section">Featured</h1>
          <div className=" flex flex-wrap gap-5 justify-around pyb-10 p-section">
            {women.slice(2, 8).map((item, index) => (
              <ScrollTile
                key={index}
                image={item.image}
                price={item.price}
                name={item.name}
              />
            ))}
          </div>{" "}
          <div className="pt-7"></div>
          <Ads nam="Men's Collection" img1="/menad2.png" img2="/menad1.png" link="men"/>
          <h1 className="text-4xl font-bold py-4 p-section mt-5">Casual</h1>
          <div className=" flex flex-wrap gap-5 justify-around pyb-10 p-section">
            {women.slice(1, 7).map((item, index) => (
              <ScrollTile
                key={index}
                image={item.image}
                price={item.price}
                name={item.name}
              />
            ))}
          </div>
        </section>
        <section className="bg-[#f3f3f3f3] h-fit p-section pb-5 mt-2">
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
      </div>
    </>
  );
};

export default Men;
