import React from 'react'
import ItemList from './ItemList'
import data from '../data.json'


const ItemListContainer = () => {
  const catFilter = data.filter((raqueta) => raqueta.category === category);
  return (
    <div>
      {category ? <ItemList raquetas={catFilter} /> : <ItemList raquetas={data} />}
    </div>
  );
};

export default ItemListContainer


// EL ItemListContainer devuelve, en el return, el ItemList