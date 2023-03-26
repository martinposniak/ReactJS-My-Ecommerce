import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import FormCart from "./FormCart";
import { useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext";

const Cart = () => {
  const { cart, totalAmount, removeProduct } = useContext(CartContext);

  function currencyFormat(num) {
    return '$' + num.toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
 }


 if (cart.length === 0) {
  return (
    <>
      <div className="cart">
        <h2>El carrito esta vacio..</h2>
        <Link to={"/catalogue"}>
          <Button>Ir al catálogo</Button>
        </Link>
      </div>
    </>
  );
}


  return (
    <div className="main_cart">
      {cart.map((item) => {
        return(
          <div key={item.id} className="cart_container">
            <Card className="cards">
              <Card.Img className="cart_img" src={item.img} alt="imagen_producto" />
              <Card.Title className="cart_title">{item.name}</Card.Title>
              <Card.Body className="cart_body">
                <Card.Text as="b">Cantidad: {item.quantity}</Card.Text>
                <Card.Text>Subtotal: {currencyFormat(item.price * item.quantity)}.-</Card.Text>
              </Card.Body>
              <Card.Footer className="cart_footer">
                <Button className="cart_remove"
                  onClick={() => removeProduct(item.id)}
                >
                  Eliminar
                </Button>
              </Card.Footer>
            </Card>
          </div>
        );
      })}
      <div className="tag_total_amount"><h2>Total: {currencyFormat(totalAmount)}.-</h2></div>
      <FormCart />
    </div>
  )
}

export default Cart