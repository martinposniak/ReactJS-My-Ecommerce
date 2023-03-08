//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import './App.css'
// El hook 'useParams' me permite acceder a parametros de la URL

import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Contact from "./components/Contact";
import Cart from "./components/Cart";


const App = () => {
  return (
    <BrowserRouter>
    <NavBar/>

    <Routes>
      <Route exact path='/' element={<Welcome />} />
      <Route exact path='/catalogue' element={<ItemListContainer />} />
      <Route exact path='/category/:category' element={<ItemListContainer />} />
      <Route exact path='/item/:id' element={<ItemDetailContainer />} />
      <Route exact path="/cart" element={<Cart />} />
      <Route exact path='/contact' element={<Contact />} />

    </Routes>

    <Footer />
    </BrowserRouter>
  );
};

export default App



















/*
const App = () => {
  const autenticado = true;
  const edad = 18;
  const categorias = ["Categoría A", "Categoría B", "Categoria C"];
  //Lo que vemos adentro del div, con el operador ternario, estamos poniendo un condicional if. Lo que dice ahi es si la variable const 'autenticado' es true, entonces que me devuelva como resultado "El usuario está autenticado" y sino es true (osea, falso) que me devuelva el resultado "No está autenticado"
  
  if(autenticado){
    "El usuario está autenticado"
  }else{
    "No está autenticado"
  }
  
  return (
    <>
    <div>
      {autenticado? "El usuario está autenticado" : "No está autenticado"}
    </div>
    <div>
      {edad < 18? "Es menor de edad" : "Es mayor"}
    </div>
    <ul>
      {categorias.map((cat, index)=>(
        <li key={index}>{cat}</li>
      ))}
      </ul>
    <NavBar saludo ={"Bienvenidos"}
    otroMensaje={"Comisión 51100"}/>
    </>
  );
};

export default App;
*/






/*
const App = () => {
  let nombre = "Martin";
  const sumar = () => {
    const numero = 6;

    if(numero > 5){
      console.log("Es mayor a 5");
    }else{
      console.log("Es menor a 5");
    }
  };

  sumar();

  return <>
  <NavBar/>
  <h1>{"Hola " + nombre}</h1>
  <h3>{"CoderHouse".toUpperCase()}</h3>
  </>;
};

export default App;

*/



/*
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Match Point Palermo
      </p>
      <p>Comisión 51100</p>
    </div>
  )
}

export default App
*/



// Utilizar el componente rafce (RECOMENADO POR EL PROFESOR)
// El componente rafce es un componente funcional, que contiene una función flecha.
/*
import React from 'react'

const App = () => {
  return (
    <div>App</div>
  )
}

export default App
*/

// 2 TIPOS DE COMPONENTES QUE VAMOS A SEGUIR NOSOTROS
     // 1) COMPONENTES CONTENEDORES:
     // Este componente es responsable de la parte lógica.
     //Tienen como propósito encapsular a otros componentes y proporcionarles las propiedades que necesitan.
     // Además se encargan de modificar el estado de la aplicación para que el usuario vea el cambio en los datos (por eso son también llamados state components). 

     // Si yo tengo que consultar una API, lo voy a hacer en un componente contenedor. 
     // El componente contenedor trae la información de la API, hasta puede realizar el mapeo (con el metodo map) y pasarle los resultados a un componente de presentación. Y mi componente de presentación lo unico que va a hacer, es mostrar, por ejemplo, en una card, la foto, la descripción, el precio del producto, y todo eso va a provenir del componente contenedor.

     // CARACTERISTICAS:
       // Orientados al funcionamiento de la aplicación.
       // Contienen componentes de presentación y/u otros contenedores.
       // Se comunican con las fuentes de datos. 
       // Usualmente tienen estado para representar el cambio en los datos.
     



     // 2) COMPONENTES DE PRESENTACIÓN:
     // Este componente es responsable de mostrar resultados.
     // Si yo quiero mostrar en pantalla, lo voy a hacer en un componente de presentación.
     // Los componentes de presentación se limitan a mostrar datos y tienen poca o nula lógica asociada a manipulación del estado (por eso son también llamados stateless components).
  //CARACTERISTICAS:
     // Orientados al aspecto visual.
     // No tienen dependencia con fuentes de datos (ej. Flux).
     // Reciben callbacks por medio de props.
     // Pueden ser descritos como componentes funcionales.
     // Normalmente no tienen estado.



     
