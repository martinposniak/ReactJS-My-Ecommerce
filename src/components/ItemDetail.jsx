import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import { Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";


const ItemDetail = ({ data }) => {

  const { id } = useParams();
  const [ product, setProduct ] = useState([]);

  function currencyFormat(num) {
    return '$' + num.toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
 }


 useEffect(() => {
  const db = getFirestore();

  const oneItem = doc(db, "tenis", `${id}`);
  getDoc(oneItem).then((snapshot) =>{
    const doc = snapshot.data();
    setProduct(doc);
  })
},[])

  const dataFilter = data.filter((dato) => dato.id == id);

  

  return (
    <>
    {dataFilter.map((dato) => (
        <div key={dato.id}>
    <Card className='itemContainer'>
      <Card.Img className='itemImage' variant="top" src={dato.img} />
      <Card.Body>
        <Card.Title className='itemTitulo'>{dato.name}</Card.Title>
        <Card.Text className='itemCategory'>
            Category: {dato.category}
        </Card.Text>
        <Card.Text className='itemPrice'>
        {currencyFormat(dato.price)}.-
        </Card.Text>
        <Card.Footer className="itemFooter">
          <ItemCount 
          stock={dato.stock}
          id={dato.id}
          addItem={dato.addItem}
          price={dato.price}
          name={dato.name}
          />
        </Card.Footer>
      </Card.Body>
    </Card>
    </div>
    ))

    }
    </>
  )
}

export default ItemDetail