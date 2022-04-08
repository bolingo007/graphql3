const Gestionnaires = require('../models/gestionnaires')

module.exports.getGestionnaire = async () => {
  let Gestionnaire = await Gestionnaires.find();

  return Gestionnaire
}

module.exports.getGestionnairesearch = async ({ID_Gestionnaire}) => {
  let Gestionnaire = await Gestionnaires.find({ID_Gestionnaire});

  return Gestionnaire
}
