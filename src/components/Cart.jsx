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
      <div className="cart_">
        <h2>El carrito esta vacio..</h2>
        <Link to={"/catalogue"}>
          <Button colorScheme="red">Ir al catálogo</Button>
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
              <Card.Img src={item.img} alt="imagen_producto" />
              <Card.Title>{item.name}</Card.Title>
              <CardBody>
                <Card.Text as="b">Cantidad: {item.quantity}</Card.Text>
                <Card.Text>Subtotal: {currencyFormat(item.price * item.quantity)}.-</Card.Text>
              </CardBody>
              <Footer>
                <Button
                  colorScheme="red"
                  onClick={() => removeProduct(item.id)}
                >
                  X
                </Button>
              </Footer>
            </Card>
          </div>
        );
      })}
      <div className="tag_total_amount">Total: {currencyFormat(totalAmount)}.-</div>
      <FormCart />
    </div>
  )
}

export default Cart