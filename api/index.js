const express = require('express');
const app =  express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");

dotenv.config();
app.use(express.json());
mongoose.connect(
    process.env.MONGO_URL
).then(()=>console.log("DataBase Connected Succesfully")).catch((err)=>{
    console.log("Connection Failed due to ", err);
});

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/product", productRoute);
app.use("/api/cart", cartRoute);
app.use("/api/order", orderRoute);

app.get("/", (req, res)=>{
    res.send("Hello World");
});

app.listen( process.env.PORT || 3001, (req, res)=>{
    console.log(`app is running on port ${process.env.PORT}`);
})

