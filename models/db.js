
const mongoose = require("mongoose");
let db = {};

mongoose.connect('mongodb://localhost/locationV');

const Schema = mongoose.Schema;

db.Schema = Schema;
db.mongoose = mongoose;

//const ObjectId = Schema.ObjectId;

module.exports = db;
