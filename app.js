const lugar = require('./lugar/lugar');
const clima = require('./clima/clima')

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion para obtener el clima',
        demand: true
    }
}).argv;

const getInfo = async(direccion) => {

    try {
        const coordinates = await lugar.getLugarLatLon(direccion);
        const temp = await clima.getClima(coordinates.lat, coordinates.lon);
        return `El clima de ${direccion} es de ${temp} grados`;

    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`
    }

}

// lugar.getLugarLatLon(argv.direccion)
//     .then(resp => console.log(resp))
//     .catch(err => console.log(err));

// clima.getClima(20.52, -100.82)
//     .then(console.log)
//     .catch(err => console.log(err));

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);