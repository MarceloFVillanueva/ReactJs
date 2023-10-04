// Parte 4. Diseño modular, diseño a través de funciones

import { header } from "./titulo.js"

const div = document.querySelector('#root')

function app() {
    header(div)
    // main()
    // footer()
}

app()

// // spa -> single page application

//Parte 3, usamos importación entre archivos js. agregamos en html type = "module"

// import { crearTitulo } from "./titulo"

// const div = document.querySelector('#root')

// crearTitulo(div)

//Parte 2 de la manipulación del html con js. Creamos una función para generar los agregados de título y subtítulo

// const div = document.querySelector('#root')

// const crearTitulo = () => {
//     const titulo = document.createElement('h1')
//     titulo.innerHTML = "Bienvenidos"

//     const subTitulo = document.createElement('h3')
//     subTitulo.innerHTML = "Bienvenidos a la clase"

//     div.appendChild(titulo)
//     div.appendChild(subTitulo)
// }

// crearTitulo()


//Parte 1 de la manipulación del html con js. Creamos el título y subtítulo para agregar al html

// const div = document.querySelector('#root')

// const titulo = document.createElement('h1')
// titulo.innerHTML = "Bienvenidos"

// const subTitulo = document.createElement('h3')
// subTitulo.innerHTML = "Bienvenidos a la clase"

// div.appendChild(titulo)
// div.appendChild(subTitulo)