if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const stripeSecretKey = process.env.stripe_secret_key
const stripePublicKey = process.env.stripe_public_key


const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.listen(3000)