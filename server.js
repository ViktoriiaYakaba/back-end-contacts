const app = require("./app");
const mongoose = require("mongoose");

const DB_HOST = "mongodb+srv://Viktoriia:Vika1111@cluster0.ufwzkax.mongodb.net/";

mongoose.connect(DB_HOST)
    .then(() => console.log("work"))
.catch(error=>console.log(error.message))
