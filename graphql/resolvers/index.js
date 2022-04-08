
const vehiculeController = require('../../controllers/VehiculeController')
const clientController = require('../../controllers/ClientController')
const gestionnaireController = require('../../controllers/GestionnaireController')
const reservationController = require('../../controllers/ReservationController')
const factureController = require('../../controllers/FactureController')

const { GraphQLDateTime } = require("graphql-iso-date");

const customScalarResolver = {
  Date: GraphQLDateTime
};

module.exports = {
  getVehicules: vehiculeController.getVehicule,
  getVehiculesSearch: vehiculeController.getVehiculeSearch,
  getClients: clientController.getClient,
  getClientSearch: clientController.getClientSearch,
  getGestionnaires: gestionnaireController.getGestionnaire,
  getGestionnairesSearch: gestionnaireController.getGestionnairesearch,
  getReservations: reservationController.getReservation,
  getReservationsSearch: reservationController.getReservationsearch,
  getFactures: factureController.getFacture,
  getFacturesSearch: factureController.getFacturesearch,
  customScalarResolver,

}

