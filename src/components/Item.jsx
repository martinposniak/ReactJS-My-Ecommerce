// El Item contiene una card.

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({id, name, img, category, price}) => {
  return (
    <div>
        <div key={id}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
            Category: {category}
        </Card.Text>
        <Card.Text>
            Precio: {price}
        </Card.Text>
        <Button variant="primary">
            <Link to={`/item/${id}`}>Details</Link>
        </Button>
      </Card.Body>
    </Card>
    </div>
    </div>
  );
}

export default Item;