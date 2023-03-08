import data from '../data.json';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  return (
    <>
    <ItemDetail data={data} />
    </>
  )
}

export default ItemDetailContainer