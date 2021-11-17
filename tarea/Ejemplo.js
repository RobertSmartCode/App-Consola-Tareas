const { v4: uudiv4 } = require('uuid');

class Tarea {
    //No es necesario se hace solo para mantener la similitud a otros lenguajes
    id = '';
    desc = '';
    completadoEn = null;
//Solo hace falta el constructor
    constructor( desc ) {

        this.id = uudiv4();
        this.desc = desc;
        this.completadoEn = null;

    }

}


class Tareas {

    _listado = {
        'abc': 123,
        
    };

    constructor() {
        this._listado = {};
    }
     crearTarea( desc = '' ) {

        const tarea = new Tarea(desc);
        //Con la siguente linea de código de empieza a almacenar en _listado los objetos que se vayan creando.
        this._listado[tarea.id] = tarea; // This hace referencia a la instancia creada en este caso la clase this=Tareas
    }
      

     get listadoArr(){
        const listado = [];
        Object.keys(this._listado).forEach(key =>{
            const tarea = this._listado[key];
            listado.push( tarea );
        });

        return listado;
    }
   
}
const tareas = new Tareas
//const tarea = new Tarea('Tarea1');
//tareas._listado[tarea.id] = tarea
//console.log(tareas._listado);
tareas.crearTarea('Hacer 100 sentadillas');

//console.log(tareas);
console.log(tareas.listadoArr);



