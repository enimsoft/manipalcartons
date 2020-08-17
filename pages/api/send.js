import Axios from 'axios';

const server = () => (process.env.NODE_ENV == "production") 
    ? "https://manipalcartonsbackend.herokuapp.com"
    : "http://localhost:1337"

const axios = Axios.create({
    baseURL: server(),
});

const send = async (endpoint, data) => await axios.post(endpoint, data).catch()

export default async (req, res) => {
  await send(req.body.endpoint, req.body.data)

  res.statusCode = 200
  res.end()
}
