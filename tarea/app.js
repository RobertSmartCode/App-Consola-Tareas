require('colors');

const { inquirerMenu, 
        pausa
        
} = require('./helpers/inquirer');

const Tareas = require('./models/tareas');
const Tarea = require('./models/tarea');


const main = async() => {
    console.log("Hola Mundo");

    let opt = '';
    const tareas = new Tareas();
    do {
        //Imprimir el menú
        opt = await inquirerMenu();
        console.log({opt});

            await pausa();
        }while( opt !== '0' );

    } 

main();

