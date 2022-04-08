const db = require("./db.js");

const clientSchema = new db.Schema({
  ID_Client: Number,
  nom: String,
  prenom: String,
});

const Clients = db.mongoose.model('client', clientSchema);

module.exports = Clients;