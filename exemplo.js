import mongoose from 'mongoose'
import Cat from './models/Cat.model.js'
import User from './models/User.model.js'

mongoose
    .connect('mongodb://localhost/dbExemplo')
    .then(conn => console.log(`Conectato ao Mongo! Database: ${conn.connections[0].name}`))
    .catch(err => console.log(err))


// const user = new User({
//     name: 'Fulano 6', 
//     email: 'fulano5@gmail.com',
//     username: 'fulano5',
//     linkedinProfile: 'https://www.linkedin.com',
//     userWebsite: 'www.banana.com',
//     carPlate: 'RIO2A18'
// })

// user.save()
//     .then(newUser => console.log(newUser))
//     .catch(err => console.log(err))

const gatinho = new Cat({name:'Nala', country: 'BR', age: 3, color: 'white'})

gatinho.save()
    .then(novoGato => console.log(novoGato))
    .catch(err => console.log(err))
