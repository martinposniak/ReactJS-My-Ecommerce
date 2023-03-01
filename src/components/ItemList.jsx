// El ItemList recibe esa información del ItemListContainer, como props(propiedades), y devuelve un map que contiene el Item

import Item from "./item"


const ItemList = ({raquetas}) => {
  return (
    <>
    <div>
        {raquetas?.map((raqueta) => {
            <Item 
            key={raqueta.id}
            id={raqueta.id}
            name={raqueta.name}
            price={raqueta.price}
            category={raqueta.category}
            img={raqueta.img}
            stock={raqueta.stock}
            />
        })}
    </div>
    </>
  )
}

export default ItemList