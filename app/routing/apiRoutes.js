let friendsData = require("../data/friends");



//setup advice from HotRestaurants past homework code
module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    }); 

    app.post("/api/friends", function(req, res) {
        friendsData = req.body;
        res.json(friendsData);
    })

}