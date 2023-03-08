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
import { useContext, useState } from "react";
import { GrFormAdd } from 'react-icons/gr';
import { GrFormSubtract } from 'react-icons/gr';

const ItemCount = ({ sotck, id, price, name }) => {
  const [count, setCount] = useState(1);

  const addQty = () => {
    setCount(count + 1);
  };

  const substractQty = () => {
    setCount(count - 1);
  };


  return (
    <>
    <div>
        <Button disabled variant="primary" size="sm">
          {count <= 1 ?(
            <GrFormSubtract />
          ) : (
            <Button onClick={substractQty}><GrFormSubtract /></Button>
          )}
        </Button>
        <Button onClick={() => addToCart()} variant="primary" size="sm">
          Add to Cart: {count}
        </Button>
        <Button onClick={addQty}>
          {count < stock ? (
            <GrFormAdd />
          ) : (
            <Button disabled><GrFormAdd /></Button>
          )}
        </Button>
    </div>
    </>
  )
}

export default ItemCount