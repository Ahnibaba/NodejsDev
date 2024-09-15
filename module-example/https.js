const { send } = require("./request.js")
const { read } = require("./response")
const { REQUEST_TIMEOUT } = require("./request")
//import { send } from "./request.mjs"
//import { read } from "./response.mjs"

 

const makeRequest = (url, data)  => {
   send(url, data)
   return read()
}

const responseData = makeRequest("https://www.google.com", "hello")
console.log(responseData);

console.log(require.cache);

