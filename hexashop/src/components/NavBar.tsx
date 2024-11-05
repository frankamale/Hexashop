const NavBar = () => {
  return (
    <div className="bg-[#D9D9D9] w-full h-20 flex justify-between px-20 items-center">
      <div>
        <a href="/">
          <img src="/logo.png" alt="logo" className="w-36" />
        </a>
      </div>
      <div>
        <ul className="flex gap-10 text-lg ">
          <li>
            {" "}
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/men">Men's</a>
          </li>
          <li>
            <a href="/women">Women's</a>
          </li>
          <li>
            <a href="kids">Kid's</a>
          </li>
          <a href="about">
            <li>About Us</li>
          </a>
          <a href="contact">
            <li>Contact Us</li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
