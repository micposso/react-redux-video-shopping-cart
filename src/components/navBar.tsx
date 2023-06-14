import { useSelector } from 'react-redux';

const Navbar = () => {
  const amount = useSelector((store) => StorageEvent.basket.amount);
  return (
    <div>
      <p>Home</p>
      <p>Basket</p>
      <p>{amount}</p>
   </div>
 )
}

export default Navbar;