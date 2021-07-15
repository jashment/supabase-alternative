const express = require('express')
const router = express.Router()
const { createClient } = require('@supabase/supabase-js')

// Create a single supabase client for interacting with your database 
const supabase = createClient(process.env.SUPABASE_URL, process.env.ANON_KEY)


router.get('/all', async(req, res, next) => {
    const { data, error } = await supabase
    .from('Play')
    .select()
    if (error) {
        console.log(error)
    } else {
        res.send(data)
    }
    next()
})

module.exports = router