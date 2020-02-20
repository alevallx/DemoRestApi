const app = require('express');
const router = app.Router();

router.get('/test',(req,res) =>{
    const data = {
        "name" : "Alexander",
        "age" : "33"
    }
    res.json(data)
});

module.exports = router;