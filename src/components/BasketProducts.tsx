import { useSelector } from "react-redux";
import Product from "./Product";

const BasketProducts = () => {
  const { products, total, amount  } = useSelector((store) => store.basket)
  return (
    <>
      <div>Basket Products</div>
      {products.map((item, i) =>
        <Product key={i}
          name={item.name}
          price={item.price}
          image={item.image}
          sizes={item.sizes}
          colors={item.colors}
          amount={item.amount}
        />
      )}
    </>
  )
}

export default BasketProducts;