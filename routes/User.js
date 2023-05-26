const express = require("express");
const router = express.Router();
const userService = require("../controllers/UserService")

router.post('/signin',userService.getUserSignIn);
router.post('/signup',userService.addUser);
router.get('/getUserId',userService.getUserId);
router.get('/validarCorreo',userService.validarCorreo);
module.exports = router;