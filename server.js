const express = require('express')
const monster = require('./routes/monsters')
const places = require('./routes/places')
const cors = require('cors')


const app = express()

const corsOptions = {
    'preflightContinue': true,
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Origin': '*',
    'Referrer-Policy': 'no-referer',
    'Accept': '*'
}
app.options('*', cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors(corsOptions))

app.use('/monsters', monster)
app.use('/places', places)

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})