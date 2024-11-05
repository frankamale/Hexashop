import BottomNav from "../components/BottomNav";
import NavBar from "../components/NavBar";

const ContactUs = () => {
  return (
    <>
      <NavBar />
      <div className="h-[90vh]">
        <div className="bg-black bg-opacity-50 h-[40vh] px-40">
          <h1 className="text-4xl text-white font-bold text-center pt-10">
            Get In Touch
          </h1>
          <div className="flex gap-7 h-[60vh] mt-7">
            <div className=" bg-white w-full shadow-md py-8 px-5 flex flex-col gap-3">
              <h1 className="font-bold text-2xl text-center">Talk To Sales</h1>
              <p className="text-[12px]">
                orem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, whe n an unknown printer took a
                galley of type and scrambled it to make a type specimen
                book.orem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's st
                andard dummy text ever since the 1500s.....
              </p>
              <p className="text-center text-lg">View all global Members</p>
            </div>
            <div className="  bg-white w-full shadow-md py-8 px-5 flex flex-col gap-3">
              <h1 className="font-bold text-2xl text-center">
                Contact Customer support
              </h1>
              <p className="text-[12px]">
                orem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, whe n an unknown printer took a
                galley of type and scrambled it to make a type specimen
                book.orem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's st
                andard dummy text ever since the 1500s.....
              </p>
              <div className="text-black border-2 border-black w-fit py-2 px-6 self-center ">Customer Support</div>
            </div>
          </div>
        </div>
      </div>
      <BottomNav />
    </>
  );
};

export default ContactUs;
