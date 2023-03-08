// El Item contiene una card.

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({id, img, name, category, price, stock}) => {
  return (
    <div>
        <div key={id}>
    <Card className='cardContainer'>
      <Card.Img className='cardImage' variant="top" src={img} />
      <Card.Body>
        <Card.Title className='cardTitulo'>{name}</Card.Title>
        <Card.Text className='cardCategory'>
            Category: {category}
        </Card.Text>
        <Card.Text className='cardPrice'>
            Precio: {price + ".-"}
        </Card.Text>
        <Card.Text className='cardStock'>
            Stock: {stock}
        </Card.Text>
        <Button className='cardButton' variant="primary">
            <Link className='cardDetails' to={`/item/${id}`}>Details</Link>
        </Button>
      </Card.Body>
    </Card>
    </div>
    </div>
  );
}

export default Item;

/*
async function fetchAPI() {
  const response = await fetch('https://api.coder.com.ar/user/1234');
  const datos = await response.json();
}

fetchAPI();
*/