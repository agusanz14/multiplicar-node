const fs = require('fs');

let crearArchivo = (base, limite) => {

    let data = '';

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('La base o valor introducido no es un numero');
            return;

        }

        for (let i = 1; i < limite; i++) {

            data += `${base}*${i} = ${base*i}\n`;

        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

            if (err)
                reject(err);
            else {
                resolve(`tabla-${base}.txt`);

            }
        });

    });

}

let listarTabla = (base, limite) => {

    //let data = '';

    for (let i = 1; i < limite; i++) {

        console.log(`${base}*${i} = ${base*i}`);

    }


}

module.exports = {
    crearArchivo,
    listarTabla
}