import Button from "./Button";

type Props={
  img1: string;
  img2: string;
  nam: string;
  link: string;
}

const Ads = ({img1, img2, nam, link}:Props) => {
  return (
    <>
      <div className="relative bg-[url('/coverkid.png')] bg-cover w-full h-96 bg-center p-section">
        <div className="absolute inset-0 bg-black bg-opacity-70 "></div>
        <div className=" relative flex gap-10 w-full h-full z-10  text-white">
          <div className=" h-full w-full flex gap-2  ">
            <img src={`${img1}`} alt="kid" width={280} />
            <img src={`${img2}`} alt="kid" width={280} />
          </div>
          <div className=" h-full w-full text-center p-5 flex flex-col gap-2 items-center ">
            <h1 className="text-4xl font-bold py-4 ">{nam}</h1>
            <p className="text-[12px] text-start">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <br />
            <p className="text-[12px] text-start">
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including
              versions of Lorem IpsuLorem Ipsum is simply{" "}
              <span className="font-bold">
                dummy text of the printing and typesetting industry. Lorem Ipsum
                has been t
              </span>
              he industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged.
            </p>
           <a href={`${link}`}><Button content={"Discover More"}/></a>

          </div>
        </div>
      </div>
    </>
  );
}; 

export default Ads;
