const express = require('express')
const router = express.Router()
const { createClient } = require('@supabase/supabase-js')

require('dotenv').config();
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

router.post('/add', async (req, res, next) => {
const { data, error } = await supabase
  .from('Play')
  .insert([
      {
          name: 'Lion',
          description: 'King of the Savanna',
          url: 'https://images.pexels.com/photos/1106452/pexels-photo-1106452.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          emotion: 'Angry',
          genus: 'Panthera',
      }
  ])
    if (error) {
        console.log(error)
    } else {
        console.log(data)
    }
})

module.exports = router