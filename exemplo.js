import mongoose from 'mongoose'
import Cat from './models/Cat.model.js'
import User from './models/User.model.js'

mongoose
    .connect('mongodb://localhost/dbExemplo')
    .then(conn => console.log(`Conectato ao Mongo! Database: ${conn.connections[0].name}`))
    .catch(err => console.log(err))