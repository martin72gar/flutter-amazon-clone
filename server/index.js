// IMPORT FROM PACKAGES
const express = require('express');
const mongoose = require('mongoose');

// IMPORT FROM OTHER FILES
const authRouter = require('./routes/auth');

// INIT

const PORT = 3000;
const app = express();
const DB = "mongodb+srv://martin:martin123@cluster0.tkctqam.mongodb.net/?retryWrites=true&w=majority";

// middleware
app.use(express.json());
app.use(authRouter);

// connection
mongoose
    .connect(DB)
    .then(() => {
        console.log('DB Connection is successful');
    })
    .catch((e) => {
        console.log(e);
    });

app.get('/', (req, res) => {
    res.send('Hello World NodeJS');
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running at port ${PORT}`);
});