const REQUEST_TIMEOUT = 500
const encrypt = (data) => {
    return "encrypted data"
}

const send = (url, data) => {
   const encryptedData = encrypt(data)
   console.log(`sending ${encryptedData} to ${url}`);
   
}

console.log("Hello from request.js");
module.exports = { send, REQUEST_TIMEOUT }


//export{ send }
