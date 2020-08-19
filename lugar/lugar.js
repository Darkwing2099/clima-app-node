const axios = require('axios');

const getLugarLatLon = async(direccion) => {

    const encodedUrl = encodeURI(direccion);

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ encodedUrl }&appid=37d3d706a9183229294e6f31855e6ffc`);

    if (resp.status != 200) {
        return `No hay resultados para ${direccion}`;
    } else {
        return {
            direccion,
            lat: resp.data.coord.lat,
            lon: resp.data.coord.lon
        }
    }

}

module.exports = {
    getLugarLatLon
}