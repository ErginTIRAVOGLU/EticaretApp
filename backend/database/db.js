const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();

const uri = process.env.MONGODB_URI;

const dBCSonnection= () => {
    mongoose.connect(uri,{
    })
    .then(() => {
        console.log("MongoDb bağlandı.");
    })
    .catch((err) => {
        console.log("Bağlantı hatası, Hata : "+err.message);
    });
}

module.exports = dBCSonnection;