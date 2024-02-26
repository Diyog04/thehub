/*const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser")

const app = express();

require("dotenv").config();

const blogRoute = require("./routes/blogroute");
const commentRoute = require("./routes/commentroute");
const authRoutes = require("./routes/authroute");

app.use(express.json());

app.use(cors());

app.use(cookieParser());

mongoose.connect(process.env.MOGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("connected to database"))
    .catch((err) => {
        console.log("failed to connect", err);
    });


app.use("/posts", blogRoute);
app.use("/comments", commentRoute);
app.use("/auth", authRoutes)
app.listen(process.env.APP_PORT,function () {
    console.log(`server is listening on http:localhost:${process.env.APP_PORT}`)
});*/


/*import http from 'h require';
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 8001;

const server = http.createserver((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('*************');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://Rs.{TheHub}:Rs.{5502}/`);
});

document.getElementById('buyBtn').addEventListener('click', function () {
    addToCart();
});

function addToCart() {
    // Simulate adding the product to the cart
    alert('Product added to cart!');
}
*/


