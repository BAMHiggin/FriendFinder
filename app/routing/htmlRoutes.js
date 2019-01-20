// dependency
const path = require("path");

module.exports = function(app) {

    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    app.get("/CSS/style.css", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/CSS/style.css"));
    });

    //this routing is required to see css stylings
    app.get("/CSS/images/BoatRide.mp4", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/CSS/images/BoatRide.mp4"));
    });

    // home default
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
}

