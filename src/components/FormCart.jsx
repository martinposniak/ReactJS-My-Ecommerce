import { useRef, useEffect } from "react";
import Swal from 'sweetalert2';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const FormCart = () => {

  const comprarProd = (e) => {
    e.preventDefault();
    Swal.fire(
      'Muchas gracias por tu compra!',
      'Te enviaremos un mail a la brevedad',
      'success'
    )
  }
  return (
    <>
    <div className="form_cart">
     <Form>
      <fieldset>
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control placeholder="Nombre" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Apellido</Form.Label>
          <Form.Select>
            <option>Disabled select</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </fieldset>
    </Form>
    </div>
    </>
  )
}

export default FormCart