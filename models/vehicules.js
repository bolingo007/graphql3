const db = require("./db.js");

const vehiculeSchema = new db.Schema({
  ID_Vehicule: Number,
  type_Vehicule: String,
  marque: String,
  modele: String,
  nombre_place: Number,
  Couleur: String,
  force_moteur: String,
  disponibilite: Number,
  ID_Gestionnaire: Number,
});

const Vehicules = db.mongoose.model('vehicule', vehiculeSchema);

module.exports = Vehicules;