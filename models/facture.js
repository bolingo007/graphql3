const db = require("./db.js");

const facturenSchema = new db.Schema({
  ID_Facture: Number,
  ID_Reservation: Number,
  prix_Reservation: Number,
  date_debut_Reservation: Date,
  date_fin_Reservation: Date,
  nom_client: String,
  prenom_client: String,
  marque_Vehicule: String,
  modele_Vehicule: String
});

const Factures = db.mongoose.model('facture', facturenSchema);

module.exports = Factures;

