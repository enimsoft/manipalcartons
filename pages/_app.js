import '../styles/globals.css';

import axios from 'axios';

axios.defaults.baseURL = 'https://axios-app.firebaseio.com' // the prefix of the URL
axios.defaults.headers.get['Accept'] = 'application/json'   // default header for all get request
axios.defaults.headers.post['Accept'] = 'application/json'  // default header for all POST request

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
