const axios = require("axios")

axios.get("https://www.wikipedis.org")
  .then((response) => {
    console.log(response);
    
  })
  .catch (error => {
    console.log(error);
    
  }) 