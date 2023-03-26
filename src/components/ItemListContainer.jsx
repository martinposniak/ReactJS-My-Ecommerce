import React from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import Loading from './Loading';


const ItemListContainer = () => {
  const [products, setProducts]=useState([])
  const [isLoading, setIsLoading] = useState(true);
  const { category, subcategory } = useParams();



   useEffect(()=>{
    const db = getFirestore();

    const itemsCollection = collection(db, "tenis");
    getDocs(itemsCollection).then((snapshot)=>{
      const docs = snapshot.docs.map((doc)=> ({
        ...doc.data(),
        id: doc.id
      }));
      setProducts(docs);
      setIsLoading(false);
      
    })
   },[])

   const catFilterCategory = products.filter((product) => product.category === category);
   const catFilterSubCategory = products.filter((product) => product.subcategory === subcategory);

   function render() {
    if (isLoading) {
      return <Loading />;
    } else if (subcategory) {
      return <ItemList product={catFilterSubCategory} />;
    } else {
      return category ? (
        <ItemList product={catFilterCategory} />
      ) : (
        <ItemList product={products} />
      );
    }
  }


  return (
    <div className='itemListContainer'>
      {render()}
    </div>
  );
};

export default ItemListContainer


// EL ItemListContainer devuelve, en el return, el ItemList


// Recordar usar para el proyecto final FETCH, ASINCRONO, ESTADOS.

/*
  const { category } = useParams();
   const getProducts = async ()=>{
       const data = await fetch('https://fakestoreapi.com/products')
       const resp = await data.json()
       setProducts(resp)
       console.log(products)
   }
*/