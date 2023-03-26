import { useRef, useEffect } from "react";
import Swal from 'sweetalert2';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { collection, addDoc, getFirestore } from 'firebase/firestore';
import { useState } from 'react';


const FormCart = () => {



  const [orderId, setOrderId] = useState(null);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const db = getFirestore();

  const comprarProd = (e) => {
    e.preventDefault();
    addDoc(orderCollection, order).then(({id})=> setOrderId(id))
    Swal.fire(
      'Muchas gracias por tu compra!',
      'Te enviaremos un mail a la brevedad',
      'success'
    )
  }

  const order = {
    name,
    lastName,
    email,
    phone
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
        <Form.Select required> 
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
        <Form.Label>Teléfono</Form.Label>
        <Form.Control onChange={(e) => setPhone(e.target.value)} placeholder="phone" type="number" required/>
        </Form.Group>
        <Button type="submit">Confirmar compra</Button>
      </fieldset>
    </Form>
    <p>Nro. de orden: {orderId}</p>
    </div>
    </>
  )
}

export default FormCart