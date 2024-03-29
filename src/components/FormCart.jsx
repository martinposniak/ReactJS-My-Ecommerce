import Swal from 'sweetalert2';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { collection, addDoc, getFirestore } from 'firebase/firestore';
import { useState } from 'react';
import { CartContext } from '../context/ShoppingCartContext';
import { useContext } from "react";
import { useNavigate } from 'react-router-dom';


const FormCart = () => {


  const navegar = useNavigate();
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [emailRepeat, setEmailRepeat] = useState("");
  const [country, setCountry] = useState("");
  const { isLogged, cleanCart, cart } = useContext(CartContext);

  const db = getFirestore();

  const comprarProd = (e) => {
    e.preventDefault();
    if (isLogged) {
      if(email === emailRepeat){
        addDoc(orderCollection, order).then(({id})=> {

          Swal.fire({
            icon:'success',
            title:'Muchas gracias por tu compra!',
            text:`Tu numero de compra es "${id}"`,
          }).then(function(){
            cleanCart()
          })
       })
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Los mails no coiniden',
           timer: 10000
        })
       }
      }else{
        Swal.fire({
          icon: 'warning',
          title: 'Oops...',
          text: 'Debes iniciar sesión para realizar la compra. Si aún no tienes cuenta, haz click en OK y registrate!',
           timer: 10000
        }).then((result) => {
          if (result.isConfirmed) {
            navegar('/signup')
        }
        })
      }
    }
      


  const order = {
    name,
    lastName,
    email,
    phone,
    country,
    cart
  }

  const orderCollection = collection(db, "orden");
  
  return (
    <>
    <div className="form_cart">
     <Form onSubmit={comprarProd}>
      <fieldset>
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control onChange={(e) => setName(e.target.value)} placeholder="Nombre" required/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Apellido</Form.Label>
          <Form.Control onChange={(e) => setLastName(e.target.value)} placeholder="Apellido" required/>
        </Form.Group>
        <Form.Group className="mb-3">
        <Form.Label>País</Form.Label>
        <Form.Select required onChange={(e) => setCountry(e.target.value)}> 
            <option value={""}>País</option>
            <option value={"Argentina"}>Argentina</option>
            <option value={"Brasil"}>Brasil</option>
            <option value={"Uruguay"}>Uruguay</option>
            <option value={"Chile"}>Chile</option>
            <option value={"Paraguay"}>Paraguay</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" required/>
        </Form.Group>
        <Form.Group className="mb-3">
        <Form.Label>Repetir Email</Form.Label>
        <Form.Control onChange={(e) => setEmailRepeat(e.target.value)} placeholder="Email" type="email" required/>
        </Form.Group>
        <Form.Group className="mb-3">
        <Form.Label>Teléfono</Form.Label>
        <Form.Control onChange={(e) => setPhone(e.target.value)} placeholder="phone" type="number" required/>
        </Form.Group>
        <Button type="submit">Confirmar compra</Button>
      </fieldset>
    </Form>
    </div>
    </>
  )
}

export default FormCart