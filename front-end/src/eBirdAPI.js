var axios = require("axios");
const API = process.env.EBIRD_KEY;

var config = {
  method: "get",
  url: "https://api.ebird.org/v2/ref/taxonomy/ebird?species=blujay&version=2019",
  headers: {
    "X-eBirdApiToken": "22aedbae7fku",
  },
};

const getData = () => {
  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};

getData();
