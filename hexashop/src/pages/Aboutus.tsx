import BottomNav from "../components/BottomNav";
import NavBar from "../components/NavBar";

const Aboutus = () => {
  return (
    <>
      <NavBar />
      <div className="bg-black bg-opacity-50 flex flex-col p-section h-[800px] gap-5 pb-10 pt-5">
        <h1 className="text-white text-3xl font-bold text-center p-4">
          About Us
        </h1>
        <div className="flex w-full h-1/3 gap-5">
          <div className=" bg-[#FFA92E] w-2/3 h-full p-5">
            <h1 className="text-2xl font-bold">Mission Statement</h1>
            <br />
            <p className="text-sm">
              orem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.orem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s.....
            </p>
          </div>
          <div className=" bg-white w-1/3 h-full p-5">
            <h1 className="text-2xl font-bold">Vision Statement</h1>
            <br />
            <p className="text-sm">
              rem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen
            </p>
          </div>
        </div>
        <div className="flex w-full h-2/3 gap-5">
          <div className="bg-white w-1/3 h-full p-5">
            <h1>
              <h1 className="text-2xl font-bold">Target Market Summary</h1>
            </h1>
          </div>
          <div className="flex flex-col w-2/3 h-full gap-5">
            <div className="bg-[#D9D9D9] w-full h-full p-5">
              <h1 className="text-2xl font-bold">Core Values</h1>
              <br />
              <p className="text-sm">
                orem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.orem Ipsum
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s.....
              </p>
            </div>
            <div className="#FFA92E w-full h-full bg-[#FFA92E] p-5">
              <h1 className="text-2xl font-bold">Brief Company History</h1>
              <br />
              <p className="text-sm">
                orem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.orem Ipsum
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s.....
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <BottomNav />
    </>
  );
};

export default Aboutus;
