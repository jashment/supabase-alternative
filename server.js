const express = require('express')
const animal = require('./routes/monsters')
const cors = require('cors')


const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())

app.use('/monsters', animal)

app.listen(3000, () => {
    console.log('listening on port 3000')
})