
// Importar los servicios
const { consultarDocumentos, consultarTipoDocumentos, consultarReviewsDocumentos, consultarDocumentosporCamas } 
= require('../services/mongodb.service');


const consultarAirbnb = async (req, res) => {
    let respuesta = {}
    try {
        respuesta.ok = true
        respuesta.message = "Airbnb consultados"
        let resultado = await consultarDocumentos(process.env.COLLECTION_AIRBNB)
        respuesta.info = resultado
        res.send(respuesta)
    } catch (error) {
        console.log(error);
        respuesta.ok = false
        respuesta.message = "Ha ocurrido un error consultando los airbnb."
        respuesta.info = error
        res.status(500).send(respuesta)
    }
}

const consultarTiposAirbnb = async (req, res) => {
    let respuesta = {}
    try {
        respuesta.ok = true
        respuesta.message = "Tipos de Airbnb consultados"
        let resultado = await consultarTipoDocumentos(process.env.COLLECTION_AIRBNB)
        resultado = resultado.map((element) => {
            return element._id
          })
        respuesta.info = resultado
        res.send(respuesta)
    } catch (error) {
        console.log(error);
        respuesta.ok = false
        respuesta.message = "Ha ocurrido un error consultando los tipos de airbnb."
        respuesta.info = error
        res.status(500).send(respuesta)
    }
}

const consultarReviewsAirbnb = async (req, res) => {
    let respuesta = {}
    try {
        respuesta.ok = true
        respuesta.message = "Airbnbs con más reviews consultados"
        let resultado = await consultarReviewsDocumentos(process.env.COLLECTION_AIRBNB)
        respuesta.info = resultado
        res.send(respuesta)
    } catch (error) {
        console.log(error);
        respuesta.ok = false
        respuesta.message = "Ha ocurrido un error consultando los airbnb."
        respuesta.info = error
        res.status(500).send(respuesta)
    }
}

const consultarporCamasAirbnb = async (req, res) => {
    let respuesta = {}
    try {
        let limite = req.params.nro_beds
        respuesta.ok = true
        respuesta.message = "Airbnbs consultados"
        let resultado = await consultarDocumentosporCamas(process.env.COLLECTION_AIRBNB, limite)
        respuesta.info = resultado
        res.send(respuesta)
    } catch (error) {
        console.log(error);
        respuesta.ok = false
        respuesta.message = "Ha ocurrido un error consultando los airbnb."
        respuesta.info = error
        res.status(500).send(respuesta)
    }
}


module.exports = {
    consultarAirbnb,
    consultarTiposAirbnb,
    consultarReviewsAirbnb,
    consultarporCamasAirbnb
}