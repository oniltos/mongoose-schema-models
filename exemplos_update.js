import mongoose from 'mongoose'
import User from './models/User.model.js'

mongoose
    .connect('mongodb://localhost/dbExemplo')
    .then(conn => console.log(`Conectato ao Mongo! Database: ${conn.connections[0].name}`))
    .catch(err => console.log(err))

//Encontra pelo id e atualiza
// User.findByIdAndUpdate('62d2e5d6fca6b072f861d0d5', { avatarUrl: 'images/fulano5.jpg' })
//     .then(result => console.log(result))
//     .catch(err => console.log(err))

//Encontra 1 por query e atualiza
User.updateOne({name: 'Eva'}, {$inc: {salary: 1000}})
    .then(result => console.log(result))
    .catch(err => console.log(err))

//Encontra vários e atualiza
// User.updateMany({ userWebsite: 'www.banana.com' }, { userWebsite: 'www.morango.com'})
//     .then(result => console.log(result))
//     .catch(err => console.log(err))

