export default () => (process.env.NODE_ENV == "production") 
    ? "https://manipalcartonsbackend.herokuapp.com"
    : "http://localhost:1337"