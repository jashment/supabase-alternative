const express = require('express')
const monster = require('./routes/monsters')
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

app.listen(3000, () => {
    console.log('listening on port 3000')
})