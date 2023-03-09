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

import  Button  from 'react-bootstrap/Button';
import { useContext, useState } from "react";
import { GrFormAdd } from 'react-icons/gr';
import { GrFormSubtract } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import { ButtonGroup, ButtonToolbar } from 'react-bootstrap';

const ItemCount = ({ stock, id, price, name }) => {
  const [count, setCount] = useState(1);

  const addQty = () => {
    setCount(count + 1);
  };

  const substractQty = () => {
    setCount(count - 1);
  };


  return (
    <>
    <ButtonToolbar>
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
        <Button onClick={addQty}>
          {count < stock ? (
            <GrFormAdd />
          ) : (
            <Button disabled><GrFormAdd /></Button>
          )}
        </Button>
        </ButtonGroup>
        </ButtonToolbar>
    </>
  )
}

export default ItemCount