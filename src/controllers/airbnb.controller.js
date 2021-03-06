
// Importar los servicios
const { consultarDocumentos, consultarTipoDocumentos, consultarReviewsDocumentos, consultarDocumentosporCamas } 
= require('../services/mongodb.service');

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
const consultarAirbnb = async (req, res) => {
    let respuesta = {}
    try {
        respuesta.ok = true
        respuesta.message = "Airbnb consultados"
        //Se consultan los airbnb de la base de datos 
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

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
const consultarTiposAirbnb = async (req, res) => {
    let respuesta = {}
    try {
        respuesta.ok = true
        respuesta.message = "Tipos de Airbnb consultados"
        //Se consultan los tipos de airbnb que existen en la base de datos
        let resultado = await consultarTipoDocumentos(process.env.COLLECTION_AIRBNB)
        // Se mapea el resultado para retornalos en un solo arreglo
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

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
const consultarReviewsAirbnb = async (req, res) => {
    let respuesta = {}
    try {
        respuesta.ok = true
        respuesta.message = "Airbnbs con más reviews consultados"
        // Se consultan los airbnb con más reviews en la base de datos
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

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
const consultarporCamasAirbnb = async (req, res) => {
    let respuesta = {}
    try {
        // Limite de registros que pide el usuario para la consulta
        let limite = req.params.nro_beds
        respuesta.ok = true
        respuesta.message = "Airbnbs consultados"
        // Se consultan los airbnb con más camas disponibles de la base de datos
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