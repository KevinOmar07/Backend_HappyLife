const express = require("express");
const router = express.Router();
const actividadesService = require("../controllers/ActividadesService")

router.post('/diary', actividadesService.addDiario);
router.get('/getBaul', actividadesService.getBaul);
router.post('/addBaul', actividadesService.addBaul);
router.post('/addTextRF',actividadesService.addTextRF);
router.get('/getTextRF',actividadesService.getTextRF)

module.exports = router;