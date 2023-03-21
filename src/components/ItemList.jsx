// El ItemList recibe esa información del ItemListContainer, como props(propiedades), y devuelve un map que contiene el Item

import Item from "./item"


const ItemList = ({product}) => {
  return (
    <>
<div className="productoCard">
        {product.map((product) => 
            <Item 
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            category={product.category}
            img={product.img}
            />
        )}
    </div>
    </>
  )
}

export default ItemList