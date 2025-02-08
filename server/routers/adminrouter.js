const express = require("express");
const {
    addStudent,addTeacher
}=require("../controllers/admin")
const router = express.Router();
router.post("/addstudent",addStudent);
router.post("/addteacher",addTeacher);


module.exports = router;
