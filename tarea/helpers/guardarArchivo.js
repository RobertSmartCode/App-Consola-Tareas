const fs = require('fs');

const archivo = './db/data.json';

const guardarDB = ( data ) => {
    fs.writeFileSync( archivo, JSON.stringify(data) ); //data son objetos dentros de una arreglo JSON.stringify(data) lo convierte en string
}


const leerDB = () => {
    
    if( !fs.existsSync(archivo) ){
        return null;
    }
    
    const info = fs.readFileSync(archivo, { encoding: 'utf-8' });
    const data = JSON.parse( info );


    //console.log(data);
    
    return data;
}




module.exports = {
    guardarDB,
    leerDB
}