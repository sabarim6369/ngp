const express = require("express");
const {
    addSuperadmin,
    addAdmin
}=require("../controllers/superadmin")
const router = express.Router();
router.post("/addsuperadmin",addSuperadmin);
router.post("/addadmin",addAdmin);






module.exports = router;
