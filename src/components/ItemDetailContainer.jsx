import ItemDetail from './ItemDetail';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react';


const ItemDetailContainer = () => {

  const [products, setProducts] = useState([])

  useEffect(()=>{
    const db = getFirestore();

    const itemsCollection = collection(db, "tenis");
    getDocs(itemsCollection).then((snapshot)=>{
      const docs = snapshot.docs.map((doc)=>({
        ...doc.data(),
        id: doc.id
      }));
      setProducts(docs);
    })
  },[])


  return (
    <>
    <ItemDetail data={products} />
    </>
  )
}

export default ItemDetailContainer