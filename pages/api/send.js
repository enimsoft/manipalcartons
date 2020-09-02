import axios from 'axios';

const server = () => (process.env.NODE_ENV == "production") 
    ? ["https://manipalcartonsbackend.herokuapp.com", "https://manipalcartonsbackup.herokuapp.com"]
    : ["http://localhost:1337"]

const requests = (endpoint) => (data) => server().map(url => () => axios.post(`${url}${endpoint}`, data))

const send = async (endpoint, data) => {
  console.log(requests(endpoint)(data))
  await axios.all(
    requests(endpoint)(data).map(fn => fn())
  )
}

export default async (req, res) => {
  await send(req.body.endpoint, req.body.data)
    .catch(e => { console.error(`ERROR: ${e}`) })

  res.statusCode = 200
  res.send("done")
}
