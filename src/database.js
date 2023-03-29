import mongoose from "mongoose";

mongoose.connect("")
    .then(db => console.log("database connection execute successfully"))
    .catch(error => console.log(error));
