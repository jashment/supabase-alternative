const express = require('express')
const animal = require('./routes/animals')


const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.use('/animals', animal)

app.listen(3000, () => {
    console.log('listening on port 3000')
})