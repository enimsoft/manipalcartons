export default () => (process.env.NODE_ENV == "production") 
    ? "http://manipalcartonsbackend.herokuapp.com"
    : "http://localhost:1337"