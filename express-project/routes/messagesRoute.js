const express = require("express")
const { getMessages, postMessage } = require("../controllers/messagesController")

const messagesRouter = express.Router()

// messagesRouter.get("/", getMessages)
// messagesRouter.post("/", postMessage)

messagesRouter.route("/")
    .get(getMessages)
    .post(postMessage)



module.exports = messagesRouter