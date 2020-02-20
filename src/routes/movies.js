const app = require('express');
const router = app.Router();

const movies = require('../sample.json');

router.get('/',(req,res) =>{
    res.json(movies);
});

module.exports = router;