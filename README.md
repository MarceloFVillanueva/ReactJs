# ReactJs
Curso de React Js de Coder House

* De la clase 01

USAR coderwar para practicar JS

* De la clase 02 

se instalarán node.js y npm
para la instalación de node

https://www.youtube.com/watch?v=d2KYz8Qd6FE&ab_channel=AndresSanchez

- Revisamos la última versión recomendada en https://nodejs.org/en
- Escribimos en nuestra terminal: 
    $ node -v
    $ curl -o- https://raw.githubusercontent.com/nvm/v0.35.3/install.sh
    $ curl -o- https://raw.githubusercontent.com/nvm/v0.35.3/install.sh | bash (por si algo falló en la primera instalación)
    $ source ~/.bashrc
    $ nvm list remote (nos muestra todas las versiones disponibles)
    $ nvm install vXX.XX.XX (versión recomendada)
    $ sudo apt install npm
    $ npm -v
- Probamos en nuestro equipo usando en la terminal:
    $ node archivo.js

npm es un manejador de paquetes y también es una herramienta de línea de comandos para crear cosas
https://npmjs.com

Vamos a usar VITE para crear nuestras aplicaciones

para poder usarlo:
- En la terminal:
    $ npm create vite@latest nombre-proyecto (no usar camellcase)
    Need to install the following packages:
    create-vite@4.4.1
    Ok to proceed?
    freamework: React
    variant: JavaScript

- Entramos a la carpeta:
    $ cd nombre-proyecto
    $ npm i (o npm install)
    $ npm run dev

Listo, ya podemos trabajar en nuestro proyecto

La carpeta que se crea tiene:
    - node_modules          / Librerías instaladas
    - public                / Carpeta pública para acceder desde cualquier lado a través del navegador
        vite.svg            /
    - src                   / Es dónde está y vamos a programar y crear todos nuestros archivos de JS
        - assets            / Acá se colocan las imágenes
            react.svg       /
        App.css             / Estilos para App
        App.jsx             / Archivo principa, a partir de acá se van a crear los componentes hijos
        index.css           / Estilo de nuestra página Web
        main.jsx            /
    .eslintrc.cjs           /
    .gitignore              / Todo lo que se va a ignorar a la hora de subir al repositorio
    index.html              /
    package-lock.json       / Muestra la dirección de dónde están instalados los módulos de node
    package.json            / Datos de la aplicación
    README.md               / Archivo aclarativo
    vite.config.js          / Archivo de configuración de Vite - uso interno para correr la aplicación


Se ejecuta npm run buil para que nos aparezca la carpeta:
    - dist
        - assets
            index-.js
            index-.css
            react-.svg
        index.html
        vite.svg

Se ejecuta ese comando para tomar todos los archivos modificados y los convierte en estáticos para que los pueda leer el navegador

Clase 04 - Creamos componentes

Se crea una carpeta contenedora de componentes y ahí se vuelcan los archivos que necesitemos
    - components
        - NavBar            / No es necesario escribirlos con mayúsculas pero así podemos identificar que son componentes
            NavBar.jsx


Dato extra (snipet):
    - rafce / crea un componente tipo const dentro del archivo .jsx para importar (borramos el import React)
    - rafc  / crea un componente tipo const dentro del archivo .jsx que no lo importe
    - rfc   / crea un componente tipo func dentro del archivo .jsx que no lo importe
    - rfce  / crea un componente tipo func dentro del archivo .jsx para importar
    - windows + .   / abre los emojis

Clase 08 - Hooks / Children y Patrones

- Los Hooks se detectan como useNombre
- 