const Vehicules = require('../models/vehicules')

module.exports.getVehicule = async () => {
  let vehicule = await Vehicules.find();
  console.log(vehicule);
  return vehicule
}

module.exports.getVehiculeSearch = async ({ID_Vehicule}) => {
  let vehicule = await Vehicules.find({ID_Vehicule});
  console.log(vehicule);
  return vehicule
}

/* module.exports.createMessage = async ({ input }) => {
  // TODO VALIDATION

  return await createMessage(input)
}

module.exports.updateMessage = async ({ id, input }) => {
  // TODO VALIDATION

  let message = await updateMessage(id, input)

  if (!message) {
    throw new Error('no message exists with id ' + id)
  }

  return message
}
 */