const Factures = require('../models/facture')

module.exports.getFacture = async () => {
  let Facture = await Factures.find();

  return Facture
}

module.exports.getFacturesearch = async ({ID_Facture}) => {
  let Facture = await Factures.find({ID_Facture});

  return Facture
}
