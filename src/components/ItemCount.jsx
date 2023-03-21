// El ItemCount va adentro del ItemDetail.jsx

// import { useState, useContext } from 'react';
/*
const ItemCount = ({ stock, id, price, name }) => {
    const [cart, setCart] = 
  return (
    <>

    </>
  )
}

export default ItemCount
*/

import Button from 'react-bootstrap/Button';
import { useState } from "react";
import Swal from 'sweetalert2';



const ItemCount = ({ stock, onAdd, id }) => {
  const [quanti, setQuanti] = useState(1);

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


  return (
    <>
    <div className='div-contador'>
      <div className='botones-contador'>
        <Button className="boton-contador" onClick={removeQty}><i className="bi bi-dash-square"></i></Button>
        <span>{quanti}</span>
        <Button className="boton-contador" onClick={addQty}><i className="bi bi-plus-square"></i></Button>
      </div>
      <div className="boton-compra">
        <Button onClick={()=> onAdd(quanti, id)}>Agregar al carrito: {quanti}</Button>
      </div>
    </div>
    </>
  )
}

export default ItemCount


/*
<ButtonGroup>
<Button variant="primary" size="sm">
  {count <= 1 ?(
    <GrFormSubtract />
    
  ) : (
    <Button onClick={substractQty}><GrFormSubtract /></Button>
  )}
</Button>
<Link to={'/cart'}>
<Button onClick={() => addToCart()} variant="primary" size="sm">
  Add to Cart: {count}
</Button>
</Link>
{count < stock ? (
<Button onClick={addQty}>
    <GrFormAdd />
    </Button>
  ) : (
    <Button><GrFormAdd /></Button>
  )}
</ButtonGroup>
*/