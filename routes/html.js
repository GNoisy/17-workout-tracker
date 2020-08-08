var router = require("express").Router();
var path = require("path");

router.get("/", function (req, res){
    res.sendFile(path.join(__dirname, "../public/index.html"))
})

router.get("/exercise", function (req, res){
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
})

router.get("/stats", function (req, res){
    res.sendFile(path.join(__dirname, "../public/stats.html"))
})


// module.exports = function(app, path) {
//     // Home page
//     app.get("/", function(req, res){
//         res.sendFile(path.join(__dirname, "../public/index.html"));
//     });
//     // Exercise page
//     app.get("/exercise", function(req, res){
//         res.sendFile(path.join(__dirname, "../public/exercise.html"));
//     });
//     // Stats page
//     app.get("/stats", function(req, res){
//         res.sendFile(path.join(__dirname, "../public/stats.html"))
//     });
// };

module.exports = router;