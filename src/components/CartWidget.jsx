import { useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext";
import { BsCart4 } from 'react-icons/bs';
import { Link } from 'react-router-dom';


const CartWidget = ({}) => {
  const { cartQty } = useContext(CartContext);
  return (
    <div>
      <Link to="/Cart">
        <BsCart4 className='cartIcono' size="3rem"/>
      </Link>
        <p className="cantidad_items">{cartQty}</p>
    </div>
  )
}

export default CartWidget