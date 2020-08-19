const axios = require('axios');

const getClima = async(lat, lon) => {

    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lon }&appid=37d3d706a9183229294e6f31855e6ffc&units=metric`);

    return response.data.main.temp;

}

module.exports = {
    getClima
}