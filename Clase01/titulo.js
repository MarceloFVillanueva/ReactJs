// Para la parte 4
export const header = (div) => {
    const titulo = document.createElement('h1')
    titulo.innerText = 'Bienvenidos a la comisión 47255'
    const subTitulo = document.createElement('h3')
    subTitulo.innerText = 'Que comience el juego'
    
    div.appendChild(titulo)
    div.appendChild(subTitulo)
} // un componente


// Para la parte 3

// export const crearTitulo = (div) => {
//     const titulo = document.createElement('h1')
//     titulo.innerHTML = "Bienvenidos"

//     const subTitulo = document.createElement('h3')
//     subTitulo.innerHTML = "Bienvenidos a la clase"

//     div.appendChild(titulo)
//     div.appendChild(subTitulo)
// }