const express = require('express')
const router = express.Router()
const { createClient } = require('@supabase/supabase-js')

require('dotenv').config();
// Create a single supabase client for interacting with your database 
const supabase = createClient(process.env.SUPABASE_URL, process.env.ANON_KEY)


router.get('/all', async(req, res, next) => {
const { data, error } = await supabase
    .from(process.env.SUPABASE_TABLE)
    .select()
    
    if (error) {
        console.log(error)
    } else {
        res.send(data)
    }
    next()
})

router.post('/create', async (req, res, next) => {
    const { data, error } = await supabase
    .from(process.env.SUPABASE_TABLE)
    .insert([
        {
            name: req.body.name,
            description: req.body.description,
            url: req.body.url,
            emotion: req.body.emotion,
            genus: req.body.genus,
        }
    ])
    if (error) {
        console.log(error)
        res.sendStatus(500)
    } else {
        console.log(data)
        res.sendStatus(200)
    }
})

router.get(':id', async (req, res, next) => {
    const { data, error } = await supabase
        .from(SUPABASE_TABLE)
        .select(req.params.id)
})

module.exports = router