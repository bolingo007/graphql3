const Clients = require('../models/clients')

module.exports.getClient = async () => {
  let Client = await Clients.find();

  return Client
}

module.exports.getClientSearch = async ({ID_Client}) => {
  let Client = await Clients.find({ID_Client});

  return Client
}
