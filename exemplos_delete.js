import mongoose from 'mongoose'
import User from './models/User.model.js'

mongoose
    .connect('mongodb://localhost/dbExemplo')
    .then(conn => console.log(`Conectato ao Mongo! Database: ${conn.connections[0].name}`))
    .catch(err => console.log(err))

//Encontra vários e deleta
User.deleteMany({ userWebsite: 'www.morango.com' })
    .then(result => console.log(result))
    .catch(err => console.log(err))

//Encontra 1 por query e deleta
User.deleteOne({name: 'Eva'})
    .then(result => console.log(result))
    .catch(err => console.log(err))

//Encontra pelo id e deleta
User.findByIdAndDelete('62d2ea3910e4f9e92f146d8f')
    .then(result => console.log(result))
    .catch(err => console.log(err))

User.countDocuments({avatarUrl: 'images/default-avatar.jpg'})
.then(result => console.log(result))
.catch(err => console.log(err))



