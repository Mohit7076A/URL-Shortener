const mongoose = require("mongoose");
const Schema  = mongoose.Schema;

const urlSchema = new Schema(
{
    originalUrl:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
        unique:true,
    },
    shortUrl:{
        type:String,
        required:true
    },
    keywords:{
        type:String,
        required:true,
    }
}
);
 module.exports = mongoose.model("URLs",urlSchema);