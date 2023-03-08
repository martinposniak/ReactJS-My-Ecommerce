import React from 'react'

import { BsCart4 } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  return (
    <div>
      <Link to="/Cart">
        <BsCart4 className='cartIcono' size="2rem"/>
      </Link>
        <span>5</span>
    </div>
  )
}

export default CartWidget