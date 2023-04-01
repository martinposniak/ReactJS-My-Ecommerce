# Proyecto Coder REACT.JS - Posniak
## El objetivo del proyecto es realizar una pagina integramente en React.JS. En mi caso se trata de un E-Commerce que comercializa productos relacionados al Tenis. Raquetas, zapatillas y pelotas de tenis. Este proyecto es una aplicación de Ecommerce desarrollada con Vite, que permite a los usuarios navegar por un catálogo de productos, agregarlos al carrito de compras y realizar una compra simulada. Tambien le agregué autenticación a la aplicación, con la finalidad de que el usuario tenga que registrar sus datos, ya que la unica forma de que pueda generar la orden de compra (al hacer click en 'confirmar compra') es solamente si ha iniciado sesión con un email y contraseña. Luego de que haya registrado su email y contraseña, la cuenta se verá reflejada en 'Authentication' en Firebase. Tambien veremos en Firestore Database, que luego de haberse generado la primera orden de compra, automaticamente se generará una nueva colección que se llama 'orden', el cual contendrá cada uno de los documentos, que a su vez, contienen dentro las ordenes de compra y los datos ingresados por el usuario en el formulario de compra, (nombre, apellido, país, email y teléfono).


![proyecto-final-posniak-react-js](https://user-images.githubusercontent.com/115593739/229306532-e095a334-b520-4980-ab76-d1c8c7078410.gif)


---
# Dependencias usadas:

---

* Vite: Para iniciar el proyecto 
* React-Bootstrap: Para dar estilos || versión: ("^2.7.2") 
* React-Router-Dom: Para el manejo de rutas || versión ("^6.8.2")
* Firebase-Firestore: Para la base de datos || versión ("^9.18.0")
* Sweetalert2: Para agregar alertas mas personalizados || versión ("^11.7.3")


