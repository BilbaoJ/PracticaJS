const express = require('express')
const router = express.Router()

const airbnbCtr = require("../controllers/airbnb.controller")

const vs = "/api/v1"

router.get(vs + "/airbnb/all-properties", airbnbCtr.consultarAirbnb)
router.get(vs + "/airbnb/types", airbnbCtr.consultarTiposAirbnb)
router.get(vs + "/airbnb/reviews", airbnbCtr.consultarReviewsAirbnb)
router.get(vs + "/airbnb/beds/:nro_beds", airbnbCtr.consultarporCamasAirbnb)

module.exports = router

