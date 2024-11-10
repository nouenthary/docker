const express = require("express");
const app = express();

app.get("/", function(req, res) {
    return res.json({
        message: "Hello Node Express JS"
    });
});

app.get("/api", function(req, res) {
    return res.json({
        data: [
            'apple', 'book', 'car'
        ],
        code: 200
    });
});

app.listen(3000, function(){
    console.log('Listening on port 3000');
});