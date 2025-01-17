const express = require('express');
const app = express();
const PORT = 3000;

const getDayMessage = function () {
    const daysOfWeek = new Date().getDay();
    switch (daysOfWeek) {
        case 1:
            return "Happy Monday! Start your week with energy!";
        case 5:
            return "It's Friday! The weekend is near!";
        default:
            return "Have a wonderful day!";
    }
}

app.get('/assistant/greet', function (req, res) {
    const name = req.query.name;
    if (!name) {
        return res.status(400).json({ error: "Name parameter is required!" });
    }
    const welcomeMessage = `Hello, ${name}! Welcome to our assistant app!`
    const dayMessage = getDayMessage()
    res.json({
        welcomeMessage,
        dayMessage
    })
})


app.listen(PORT, function () {
    console.log(`Virtual Assistant API is running on http://localhost:${PORT}`);
});
