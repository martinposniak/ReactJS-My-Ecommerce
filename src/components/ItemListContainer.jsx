import React from 'react'
import ItemList from './ItemList'
import data from '../data.json'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'


const ItemListContainer = () => {
  const [products, setProducts]=useState([])

  const { category } = useParams();
   const getProducts = async ()=>{
       const data = await fetch('https://fakestoreapi.com/products')
       const resp = await data.json()
       setProducts(resp)
       console.log(products)
   }

   useEffect(()=>{
    getProducts()
   },[])

  const catFilter = data.filter((producto) => producto.category === category);
  return (
    <div className='itemListContainer'>
      {/*Si la variable 'category' existe e incluye alguno de los filtros, se mostrará la lista con los resultados filtrados por dicho filtro (se definen en la variable catFilter). De lo contrario, si la variable 'category' no existe, se mostrará la lista completa de resultados (define la variable data).*/}
      {category ? <ItemList productos={catFilter} /> : <ItemList productos={data} />}
    </div>
  );
};

export default ItemListContainer


// EL ItemListContainer devuelve, en el return, el ItemList


// Recordar usar para el proyecto final FETCH, ASINCRONO, ESTADOS.