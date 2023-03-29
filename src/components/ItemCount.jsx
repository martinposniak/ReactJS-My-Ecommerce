// El ItemCount va adentro del ItemDetail.jsx

import Button from 'react-bootstrap/Button';
import { useContext, useState } from "react";
import Swal from 'sweetalert2';
import { CartContext } from '../context/ShoppingCartContext';


const ItemCount = ({ stock, id }) => {
  const [quanti, setQuanti] = useState(1);
  const {addItem, cart} = useContext(CartContext)
  const {isLogged} = useContext(CartContext);

 
  

  const addQty = () => {
    if (quanti < stock) {
      setQuanti(quanti + 1)
    } else {
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'Has llegado al limite de stock',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }

  const removeQty = () => {
    if(quanti > 1) {
      setQuanti(quanti - 1)
    } else{
      Swal.disableInput()
    }
  };





  const agregarAlCarrito = () => {
    if(isLogged) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Agregado al carrito',
        showConfirmButton: false,
        timer: 1500
      })
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Debes iniciar sesión para poder agregar productos al carrito de compras',
         footer: 'Si aún no tienes cuenta, haz click <a href="/signup"><h6>Aquí</h6></a>'
      })
    }
  }




  return (
    <>
    <div className='div-contador'>
      <div className='botones-contador'>
        <Button className="boton-contador" onClick={removeQty}><i className="bi bi-dash-square"></i></Button>
        <span>{quanti}</span>
        <Button className="boton-contador" onClick={addQty}><i className="bi bi-plus-square"></i></Button>
      </div>
      <div className="boton-compra">
        <Button onClick={()=> {addItem(quanti, id); agregarAlCarrito()}}>Agregar al carrito: {quanti}</Button>
      </div>
    </div>
    </>
  )
}

export default ItemCount


