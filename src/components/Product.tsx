import { useState } from "react";

interface ProductProps {
  name: string;
  price: number;
  image: string;
  sizes: string[];
  colors: string[];
  amount: number;
}



const Product = ({
  name,
  price,
  image,
  video,
  sizes,
  colors,
  amount,
}: ProductProps) => {

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="flex flex-row items-center gap-8 px-10">
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <video autoPlay={isHovered} loop muted>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="w-1/2 px-10">
        <p className="text-xl font-medium">{name}</p>
        <p className="text-lg">{price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Product;
