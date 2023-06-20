interface ProductProps {
  name: string;
  price: number;
  image?: string;
  sizes: string[];
  colors: string[];
  amount: number;
}

const Product = ({ name, price, image, sizes, colors, amount }: ProductProps) => {
  return (
    <div className="flex flex-row items-center gap-8 px-10">
      <div className="w-1/2 px-10">
        <p className="text-xl font-medium">{name}</p>
        <p className="text-lg">{price.toFixed(2)}</p>
      </div>
    </div>
  )
}

export default Product