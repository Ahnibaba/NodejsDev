const friends = require("../models/friendsModel")

function getFriends (req, res) {
    console.log(friends);
    
    res.json(friends)
}

function getFriend (req, res) {
    const friendId = req.params.friendId
    const friend = friends[friendId]
    if (friend) {
        res.status(200).json(friend)
    } else {
        res.status(404).json({
            error: "Friend does not exist"
        })
    }  
}

function postFriend (req, res) {
    const id = friends[friends.length - 1].id + 1

    if (!req.body.name) {
        return res.status(400).json({
            error: "Missing friend name"
        })
    } 
    const newFriend = {
        id: id,
        name: req.body.name
    }
    
    console.log(newFriend);
    friends.push(newFriend)

    res.json(newFriend)
    
 
}

module.exports = { getFriends, getFriend, postFriend }