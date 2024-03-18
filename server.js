var express = require("express")
var app = express()
var port = process.env.port || 3000;

app.get('/addTwoNumbers', (req, res) => {
    const { number1, number2 } = req.query;

    if (!number1 || !number2) {
        return res.status(400).json({ error: "Please provide both numbers." });
    }

    const sum = parseFloat(number1) + parseFloat(number2);
    res.status(200).json({ result: sum, status: "success" });
});


app.listen(port,()=>{
console.log("App listening to: "+port)
})

