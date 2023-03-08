// El ItemList recibe esa información del ItemListContainer, como props(propiedades), y devuelve un map que contiene el Item

import Item from "./item"


const ItemList = ({productos}) => {
  return (
    <>
<div className="productoCard">
        {productos.map((producto) => 
            <Item 
            key={producto.id}
            id={producto.id}
            name={producto.name}
            price={producto.price}
            category={producto.category}
            img={producto.img}
            />
        )}
    </div>
    </>
  )
}

export default ItemList