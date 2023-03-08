import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemDetail = ({ data }) => {

  const { id } = useParams();

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
            Precio: {dato.price + ".-"}
        </Card.Text>
        <Card.Footer className="itemFooter">
          <ItemCount 
          stock={dato.stock}
          id={dato.id}
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