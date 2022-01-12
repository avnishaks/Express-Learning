const express = require("express");
const res = require("express/lib/response");
const bodyparser = require("body-parser");



const app = express();
app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname+"/index.html");
});

app.post("/", function (req, res) {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    res.send("Final value after Maths is " +result);
});


app.get("/bmi", function (req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmi", function (req, res) {
    var w = parseFloat(req.body.w);
    var h = parseFloat(req.body.h);

    var r = w / (h * h);

    res.send("Final value of BMI is " + r);
});

app.listen(3000, function () {
    console.log("Port started at 3000");
});