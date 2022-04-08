const { buildSchema } = require('graphql')


/* let schema = buildSchema(`
  type RandomDie {
    numSides: Int!
    rollOnce: Int!
    roll(numRolls: Int!): [Int]
  }

  type Mutation {
    setMessage(message: String): String
  }

  type Query {
    random: Float!
    getDie(numSides: Int): RandomDie
    getMessage: String
  }
`) */

let schema = buildSchema(`
  scalar Date

  input MessageInput {
    content: String
    author: String
  }

  type Message {
    id: ID!
    content: String
    author: String
  }

  type RandomDie {
    numSides: Int!
    rollOnce: Int!
    roll(numRolls: Int!): [Int]
  }

  type Mutation {
    setMessage(message: String): String
    createMessage(input: MessageInput): Message
    updateMessage(id: ID!, input: MessageInput): Message
  }

  type Vehicules {
    ID_Vehicule: Int!
    type_Vehicule: String
    marque: String
    modele: String
    nombre_place: Int
    Couleur: String
    force_moteur: String
    disponibilite: Int
    ID_Gestionnaire: Int
  }

  type Clients {
    ID_Client: Int!
    nom: String
    prenom: String
  }
  
  type Gestionnaires {
    ID_Gestionnaire: Int
    nom: String
    prenom: String
  }

  type Reservations {
    ID_Reservation: Int!
    ID_Client: Int
    ID_Vehicule: Int
    prix: Int
    date_debut: Date
    date_fin: Date
  }

  type Factures {
    ID_Facture: Int!
    ID_Reservation: Int
    prix_Reservation: Int
    date_debut_Reservation: Date
    date_fin_Reservation: Date
    nom_client: String
    prenom_client: String
    marque_Vehicule: String
    modele_Vehicule: String
  }

  type Query {
    random: Float!
    getDie(numSides: Int): RandomDie
    getVehicules: [Vehicules]
    getVehiculesSearch(ID_Vehicule: Int!) : [Vehicules]
    getClients: [Clients]
    getClientsSearch(ID_Client: Int!) : [Clients]
    getGestionnaires: [Gestionnaires]
    getGestionnairesSearch(ID_Gestionnaire: Int!) : [Gestionnaires]
    getReservations: [Reservations]
    getReservationsSearch(ID_Reservation: Int!) : [Reservations]
    getFactures: [Factures]
    getFacturesSearch(ID_Facture: Int!) : [Factures]
  }
`)

module.exports = schema
