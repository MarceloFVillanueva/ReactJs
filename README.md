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