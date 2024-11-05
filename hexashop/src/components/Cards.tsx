import Button from "./Button";

type Props = {
  name: string;
  image: string;
  link: string;
};

const Cards = ({ name, image, link }: Props) => {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="bg-cover bg-center w-full h-full relative"
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col gap-5 justify-center items-center h-full">
        <h1 className="font-black text-white text-3xl">{name}</h1>
        <p className="text-white">Lorem Ipsum simply dummy</p>
        <a href={`${link}`}><Button content="Discover More" /></a>
      </div>
    </div>
  );
};

export default Cards;
