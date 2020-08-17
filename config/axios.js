import Axios from 'axios';
import server from './server'

const axios = Axios.create({
    baseURL: server(),
    // timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
});

const send = async (endpoint, data) => await axios.post(endpoint, data).catch()

export default send