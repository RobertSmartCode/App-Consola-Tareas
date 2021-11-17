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
module.exports = Tarea;
