import React from 'react'

const Contact = () => {
  return (
    <>
    <div className="contacto">
      <div className="contactoContainer">
        <div className="contactoContainerDos">
          <div className="containerFormulario">
            <form>
              <div className="completar">
                <label className='form-label' htmlFor="nombre">Nombre</label>
                <input className='form-control' type="text" placeholder='Ingrese su nombre' />
              </div>
              <div className="completar">
                <label className='form-label' htmlFor="">Email</label>
                <input className='form-control' type="email" placeholder='name@example.com' />
              </div>
              <div className="completar">
                <label className='form-label' htmlFor="">Telefono</label>
                <input className='form-control' type="tel" placeholder='Ingrese su telefono' />
              </div>
              <div className="completar">
                <label htmlFor="floatingTextarea2">Mensaje</label>
                <textarea className='form-control' name="" id="floatingTextarea2" cols="40" rows="5" placeholder='Escribe tu mensaje aquí'></textarea>
              </div>
              <div className="text-end">
                <button className='enviarDatos' type='button'>Enviar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact