import { createContext, useContext, useState, useEffect } from "react";
import { collection, Firestore, getDocs, getFirestore } from "firebase/firestore";

 // CREO EL CONTEXTO //
export const CartContext = createContext([]);

//CREO UNA FUNCIÓN QUE RETORNE EL CONTEXTO  PARA USARLO//
export const UseCartContext = ()=> useContext(CartContext)  


const ShoppingCartContext = ({ children }) => {
  const [ cart, setCart ] = useState([]);
  const [ cartQty, setCartQty ] = useState(0);
  const [ totalAmount, setTotalAmount ] = useState(0);
  const [ products, setProducts ] = useState([]);
  const [isLogged, setIsLogged]= useState(false);

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection (db, "tenis");
    getDocs(itemsCollection).then((snapshot) =>{
      const docs = snapshot.docs.map((doc)=> ({
        ...doc.data(), 
        id: doc.id
      }));
      setProducts(docs);
    })
  },[])

  const cleanCart = () => setCart([]);
    
  const findProduct = (id, array) => array.find(product => product.id === id);
  // const findItemInCart = (id) => cart.find(item => item.id === id);

  function substractAmount (price) {
    let amount = totalAmount;
    amount -= price;
    setTotalAmount(amount)
}

function substractQty () {
    if (cartQty > 0) {
        setCartQty(cartQty -1);
    }
}

function cartIsEmpty () {
    let empty = false;
    for (let index = 0; index < cart.length; index++) {
        if(cart[index].quantity === 0 && cart.length <= 1){
            empty = true;
        }
    }
    return empty;
}

const removeProduct = (id) => {
    let itemInCart = findProduct(id, cart);
    let quantity = itemInCart.quantity--;
    let posInCart = cart.indexOf(itemInCart);
    let newCart = cart.filter(product => product.id !== id);
    substractQty();
    if(cart[posInCart].quantity === 0){
        setCart(newCart); 
    } else {
        setCart ([...newCart, {...itemInCart, quantity: quantity - 1}]);
    }
    if(cart.length > 0 && totalAmount > 0){
        substractAmount(itemInCart.price)
    }
    let cartEmpty = cartIsEmpty();
    if (cartEmpty){
        cleanCart();
    }
}

function addAmount (price, quantity) {
    let amount = totalAmount;
    amount += (price * quantity);
    setTotalAmount(amount)
}

const addItem = (quantity, id) => {
    let total = cartQty;
    let newCart;
    let item = findProduct(id, products);
    let product = cart.find(product => product.id === item.id);
    if(product) {
        product.quantity += quantity;
        newCart = [...cart];
    } else {
        newCart = [...cart, {...item, quantity: quantity}];
    }
    total += quantity;
    setCart(newCart);
    setCartQty(total);
    addAmount(item.price, quantity);
};



return (
  <CartContext.Provider value={{ 
      cleanCart, 
      findProduct, 
      removeProduct, 
      addItem,
      cart, 
      setCart,
      cartQty,
      totalAmount,
      addAmount,
      isLogged,
      setIsLogged
      }}>
  { children }
  </CartContext.Provider>
);

};

export default ShoppingCartContext