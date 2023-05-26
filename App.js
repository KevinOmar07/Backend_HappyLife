const express = require("express");
const cors = require('cors');

const userRouter = require("./routes/User");
const actividadesRouter = require("./routes/Actividades")

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/", function (req,res) {
    res.send("home");
});

app.use('/user', userRouter);
app.use('/actividades', actividadesRouter);



app.listen(3000,() => {
    console.log("starting server");
})