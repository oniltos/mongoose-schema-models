import mongoose from 'mongoose'
import User from './models/User.model.js'

mongoose
    .connect('mongodb://localhost/dbExemplo')
    .then(conn => console.log(`Conectato ao Mongo! Database: ${conn.connections[0].name}`))
    .catch(err => console.log(err))

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

//Criar apenas um documento
User.create(usuario)
        .then(userCreated => console.log('Novo user criado: ', userCreated))
        .catch(err => console.log(err))
    
//Criar vários documentos de uma vez
User.insertMany(users)
        .then(usersCreated => console.log('Novos users criados: ', usersCreated))
        .catch(err => console.log(err))