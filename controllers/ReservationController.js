const Reservations = require('../models/reservations')

module.exports.getReservation = async () => {
  let Reservation = await Reservations.find();

  return Reservation
}

module.exports.getReservationsearch = async ({ID_Reservation}) => {
  let Reservation = await Reservations.find({ID_Reservation});

  return Reservation
}
