const express = require('express')
const app = express()
const path = require('path')
const mustacheExpress = require('mustache-express')

const VIEWS_PATH = path.join(__dirname, '/views')

// const tripsRouter = require('./routes/trips')
// const usersRouter = require('./routes/users')

// console.log(usersRouter)


app.use(express.urlencoded())

app.use('/css',express.static('css'))

app.engine('mustache', mustacheExpress(VIEWS_PATH + '/partials','.mustache'))
app.set('views', VIEWS_PATH)
app.set('view engine', 'mustache')


app.get('/add-user', (req,res) => {
    res.render('add-user')
})

app.post('/add-user', (req,res) => {
    let name = req.body.customerName
    let age = req.body.customerAge

    console.log(name)
    console.log(age)

    res.status(200).send()
})


app.get('/users', (req,res) => {
    
    let users = [
        {name: "John Wick", age: 34},
        {name: "John Smith", age: 32},
        {name: "Alice Doe", age: 30},
        {name: "Mike Doe", age: 24}
    ]

    users = []
    res.render('users', {users: users})

})



app.get('/',(req,res) => {
    
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





// app.use('/trips',tripsRouter)
// app.use('/users',usersRouter)

app.listen(3001, () => {
    console.log("Server is running")
})