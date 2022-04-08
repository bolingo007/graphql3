const db = require("./db.js");

const reservationSchema = new db.Schema({
  ID_Reservation: Number,
  ID_Client: Number,
  ID_Vehicule: Number,
  prix: Number,
  date_debut: Date,
  date_fin: Date,
});

const Reservations = db.mongoose.model('reservation', reservationSchema);

module.exports = Reservations;