import mongoose from 'mongoose'
import User from './models/User.model.js'

mongoose
    .connect('mongodb://localhost/dbExemplo')
    .then(conn => console.log(`Conectato ao Mongo! Database: ${conn.connections[0].name}`))
    .catch(err => console.log(err))

//Buscar múltiplos
User.find({}, null, { sort: { name: 1 } }) 
    .then(users => console.log(users))
    .catch(err => console.log(err))

//Buscar apenas 1
User.findOne({name: 'Eva'}, 'name email') 
    .then(user => console.log(user))
    .catch(err => console.log(err))

//Buscar por ID
User.findById('62d2e8438fbceba84d8243ac')
    .then(user => console.log(user))
    .catch(err => console.log(err))