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
        console.log('Error', error)
    } else {
        res.send(data)
    }
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
    if (data) {
        console.log(error)
        res.sendStatus(200)
    } else {
        res.sendStatus(500)
    }
})

router.get('/:id', async (req, res, next) => {
    const { data, error } = await supabase
        .from(process.env.SUPABASE_TABLE)
        .select()
        .eq('id', req.params.id)
    if (data) {
        res.send(data)
    } else {
        console.log(error)
        res.send(error).status(500)
    }
})

router.put('/:id/update', async (req, res, next) => {
    const { data, error } = await supabase
        .from(process.env.SUPABASE_TABLE)
        .update({
            name: req.body.name,
            description: req.body.description,
            url: req.body.url,
            emotion: req.body.emotion,
            genus: req.body.genus,
        })
        .eq('id', req.params.id)
    if (data) {
        res.send('Monster Updated', data)
    } else {
        console.log(error)
        res.send(error).status(500)
    }
})

router.delete('/:id/delete', async (req, res, next) => {
    const { data, error } = await supabase
        .from(process.env.SUPABASE_TABLE)
        .delete()
        .eq('id', req.params.id)
    if (data) {
        res.sendStatus(200)
    } else {
        console.log(error)
        res.send(error).status(500)
    }
})

module.exports = router