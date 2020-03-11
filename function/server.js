//import app from './app';
const getPublicAddress = require('public-ip');
const app = require('./app');

const PORT = process.env.PORT || 5000;

getPublicAddress.v4()
  .then((host) => {
    app.listen(PORT, () => {
      console.log(`Listen on http://${host}:${PORT}`);
    });  
  })
  .catch((error) => {
    console.error(error);
  })