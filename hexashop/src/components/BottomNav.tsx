const BottomNav = () => {
  return (
    <>
      <section className="bg-[#1E1E1E] h-[200px] w-full">
        <div className="flex justify-between text-white text-md font-light p-section py-5">
          <div className="flex flex-col gap-2">
            <img src="/logowhite.png" alt="logo" className="w-36" />

            <p>
              <span className="font-bold">Address: </span>Lahore Road,
              Sheikhupura
            </p>
            <p>
              <span className="font-bold">E-mail: </span>esample@gmail.com
            </p>
            <p>
              <span className="font-bold">Phone: </span>0700032323
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold">Shoppping and categories</p>
            <a href="/men">
              <p>Men’s Shopping</p>
            </a>
            <a href="/women">
              <p>Women’s Shopping</p>
            </a>
            <a href="kids">
              <p>Kids’ Shopping</p>
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold">Useful Links</p>
            <a href="/">
              <p>Homepage</p>
            </a>
            <a href="about">
              <p>About us</p>
            </a>
            <p>Help</p>
            <a href="contact">
              <p>Contact Us</p>
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold">Help & Information</p>
            <p>FAQs</p>
            <p>Shipping</p>
            <p>Tracking Id</p>
          </div>
        </div>
      </section>
      <section className="h-10 bg-black text-center text-white p-2 font-thin text-sm">
        <p>Copyright @ 2024</p>
      </section>
    </>
  );
};

export default BottomNav;
