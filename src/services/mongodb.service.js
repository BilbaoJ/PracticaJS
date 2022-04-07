
const { MongoClient } = require("mongodb");

const uri = process.env.URI_MONGODB;

const client = new MongoClient(uri);

const conectarDB = async () => {
  await client.connect();
  let DB = client.db(process.env.DB_MONGODB)
  return DB;
}

const consultarDocumentos = async (nombreColeccion, filtro) => {
  let db = await conectarDB()
  let coleccion = db.collection(nombreColeccion)
  filtro = filtro ? filtro : {}
  return coleccion.find(filtro).limit(parseInt(process.env.DEFAULT_LIMIT_PROPERTIES)).toArray()
}

const consultarTipoDocumentos = async (nombreColeccion) => {
  let db = await conectarDB()
  let pipeline = [ { $group : { _id : "$property_type" } } ]
  let coleccion = db.collection(nombreColeccion).aggregate(pipeline)
  return coleccion.toArray()
}

const consultarReviewsDocumentos = async (nombreColeccion) => {
  let db = await conectarDB()
  let sort = { number_of_reviews: -1 }
  let projection = { _id: 0, name: 1, beds: 1 , number_of_reviews: 1, price: 1}
  let coleccion = db.collection(nombreColeccion)
  return coleccion.find().sort(sort).project(projection).limit(parseInt(process.env.DEFAULT_LIMIT_REVIEWS)).toArray()
}

const consultarDocumentosporCamas = async (nombreColeccion, limite) => {
  let db = await conectarDB()
  let sort = { beds: -1 }
  let projection = { _id: 0, name: 1, beds: 1 , number_of_reviews: 1, price: 1}
  let coleccion = db.collection(nombreColeccion)
  return coleccion.find().sort(sort).project(projection).limit(parseInt(limite)).toArray()
}

module.exports = { 
  consultarDocumentos, 
  consultarTipoDocumentos,
  consultarReviewsDocumentos,
  consultarDocumentosporCamas
}