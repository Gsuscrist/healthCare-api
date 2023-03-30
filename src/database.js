import mongoose from "mongoose";

mongoose.connect("mongodb+srv://healthCare:secureHealth@healthcare.zlay3ab.mongodb.net/?retryWrites=true&w=majority")
    .then(db => console.log("database connection execute successfully"))
    .catch(error => console.log(error));
