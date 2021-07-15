const express = require('express')


require('dotenv').config();


const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))

const animal = require('./routes/animals')

const { createClient } = require('@supabase/supabase-js')

// Create a single supabase client for interacting with your database 
const supabase = createClient(process.env.SUPABASE_URL, process.env.ANON_KEY)


app.get('/', async (req, res) => {
    res.send('Hello World!')
const { data, error } = await supabase
  .from('Play')
  .insert([
    { name: 'Lion', description: 'King of the Savanna' }
  ])
    if (error) {
        console.log(error)
    } else {
        console.log(data)
    }
})

app.use('/animals', animal)

app.listen(3000, () => {
    console.log('listening on port 3000')
})