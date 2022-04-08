const db = require("./db.js");

const gestionnaireSchema = new db.Schema({
  ID_Gestionnaire: Number,
  nom: String,
  prenom: String,
});

const Gestionnaires = db.mongoose.model('gestionnaire', gestionnaireSchema);

module.exports = Gestionnaires;