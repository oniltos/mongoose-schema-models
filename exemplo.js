import mongoose from 'mongoose'
import Cat from './models/Cat.model.js'
import User from './models/User.model.js'

mongoose
    .connect('mongodb://localhost/dbExemplo')
    .then(conn => console.log(`Conectato ao Mongo! Database: ${conn.connections[0].name}`))
    .catch(err => console.log(err))


// const user = new User({
//     name: 'Fulano 7', 
//     email: 'fulano7@gmail.com',
//     username: 'fulano7',
//     linkedinProfile: 'https://www.linkedin.com',
//     userWebsite: 'www.banana.com',
//     carPlate: 'RIO2A18'
// })

// user.save()
//     .then(newUser => console.log(newUser))
//     .catch(err => console.log(err))

const usuario = {
    name: 'Felipe',
    email: 'felipe@gmail.com',
    username: 'felipe',
    linkedinProfile: 'https://www.linkedin.com',
    userWebsite: 'www.felipe.com',
    carPlate: 'RIO2A18'
}

const users = [
    {
        name: 'Felipe',
        email: 'felipe@gmail.com',
        username: 'felipe',
        linkedinProfile: 'https://www.linkedin.com',
        userWebsite: 'www.felipe.com',
        carPlate: 'RIO2A18'
    },{
        name: 'Eva',
        email: 'eva@gmail.com',
        username: 'felipe',
        linkedinProfile: 'https://www.linkedin.com',
        userWebsite: 'www.felipe.com',
        carPlate: 'RIO2A18'
    }
]

// User.create(usuario, (err, userCreated) => {
//     if(err) {
//         console.log(err);
//         return;
//     }

//     console.log('Novo user criado: ', userCreated)
// })

//Criar apenas um documento
User.create(usuario)
    .then(userCreated => console.log('Novo user criado: ', userCreated))
    .catch(err => console.log(err))

//Criar vários documentos de uma vez
User.insertMany(users)
    .then(usersCreated => console.log('Novos users criados: ', usersCreated))
    .catch(err => console.log(err))

