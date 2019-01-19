const friendsData = require("../data/friends");


//setup advice from HotRestaurants past homework code
module.exports = function(app) {

    app.get("/api/friends", function(res, req) {
        res.json(friendsData);
    }); 

    app.post("/api/friends", function(res,req) {
        res.json(friendsData);
    })
}