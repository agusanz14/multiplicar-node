const argv = require('yargs')
    .command('listar', 'Imprime en consolga la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {

            alias: 'l',
            default: 10
        }
    })
    .command('crear', 'Crea un archivo con la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {

            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');

let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(error => console.log(error));
        break;

    default:
        console.log('Comando no reconocido');

}


/*crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(error => console.log(error));
*/

let argv2 = process.argv;
//console.log(argv.limite);
/*let parametro = argv[2];
let base = parametro.split('=')[1];
*/