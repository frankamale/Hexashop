import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

type Props ={
    name: string;
    price: string;
    image: string;
}
const ScrollTile = ({name, price, image}:Props) => {
  return (
    
    <div className="flex flex-col w-[350px] min-w-[350px] bg-[#D9D9D9] ">
      <div className="max-h-80 h-80">
      <img src={image} alt="man" className="h-full w-full object-cover"/>
      </div>
      <div className="h-20 flex flex-col px-5 text-sm justify-center gap-2">
        <div className="flex justify-between">
          <p className="text-lg font-semibold">{name}</p>
          <div className="flex gap-1">
            <FontAwesomeIcon icon={faStar} className="text-[#ffa92e]" />
            <FontAwesomeIcon icon={faStar} className="text-[#ffa92e]" />
            <FontAwesomeIcon icon={faStar} className="text-[#ffa92e]" />
            <FontAwesomeIcon icon={faStar} className="text-[#ffa92e]" />
            <FontAwesomeIcon icon={faStar} className="text-[#ffa92e]" />
          </div>
        </div>
        <div className="flex justify-between">
          <p className="text-lg">{price}</p>
          <div className="flex items-center gap-1">
            <FontAwesomeIcon icon={faHeart} className="text-red-500"/>
            <FontAwesomeIcon icon={faCartShopping} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollTile;
