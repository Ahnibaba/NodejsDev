const path = require("path");
const { title } = require("process");

function getMessages (req, res) {

    res.render("messages", {
        title: "Messages to my Friends",
        friend: "Elon Musk"
    })

    //res.sendFile(path.join(__dirname, "..", "public", "images", "bid1.PNG"))
    //res.send("<ul><li>Hello Albert !</li></ul>")

}

function postMessage (req, res) {
    console.log("Updating messages...");

}

module.exports = { getMessages, postMessage}