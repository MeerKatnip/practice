const express = require('express')
const router = express.Router()


// this is actually the root route of the USERS route. See file name.
router.get('/',(req,res) => {
    
    let user = {
            name: "John Doe",
            address: {
                street: "5000 Westheimer Rd",
                city: "Houston",
                state: "TX"
            }
        }
    res.render('index', user)

})

module.exports = router