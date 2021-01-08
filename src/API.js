import axios from 'axios'

const URL = "https://restcountries.eu/rest/v2";

export async function getData() {
    const response = await axios.get(URL + '/all');
    return response;
}

export async function getDataToContent(country_name) {
    const response = await axios.get(URL + '/name/' + country_name);
    return response;
}

