const express = require('express');
const app = express();
app.use(express.json());  

// GET 
app.get('/training/:parameter', (req, res) => {
    const { parameter } = req.params;
    res.json({
        amount: "2000.00",
        account_no: "1000262885745",
        student_name:"kalkidan",
        date: "20241011",
        penality: 200.00,
        parameter: parameter
    });
});

// POST 
app.post('/training', (req, res) => {
    const data = req.body;
    res.json({
        message: "successful",
        status: "0",
        data: data
    });
});

//server
const port = 4500;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});