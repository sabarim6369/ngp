const express = require("express");
const {
    addQuiz,
    
}=require("../controllers/teachercontroller")
const router = express.Router();
router.post("/addquiz",addQuiz);






module.exports = router;
