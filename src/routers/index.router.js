const express = require('express')
const router = express.Router()

const airbnbCtr = require("../controllers/airbnb.controller")

const vs = "/api/v1"

//Endpoints requeridos
// Trae toda la información de las propiedades
router.get(vs + "/airbnb/all-properties", airbnbCtr.consultarAirbnb) 
// Trae los tipos de propiedades que hay 
router.get(vs + "/airbnb/types", airbnbCtr.consultarTiposAirbnb)
// Trae las propiedades con más reviews (20)
router.get(vs + "/airbnb/reviews", airbnbCtr.consultarReviewsAirbnb)
// Trae las propiedades con más camas según el limite dado por :nro_beds
router.get(vs + "/airbnb/beds/:nro_beds", airbnbCtr.consultarporCamasAirbnb)

module.exports = router

