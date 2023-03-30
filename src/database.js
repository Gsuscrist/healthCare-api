import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/HealthCare")
    .then(db => console.log("database connection execute successfully"))
    .catch(error => console.log(error));
