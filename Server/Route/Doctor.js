const express = require("express");
const { addSlots } = require("../Controller/Slots");
const { signup, login } = require("../Controller/Doctor");
const router = express.Router();

router.post("/signup", signup); 
router.post("/login", login); 
router.post("/addSlots", addSlots); 

module.exports = router;
