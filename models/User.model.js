import mongoose from 'mongoose'
import validator from 'validator'

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    username: String,
    avatarUrl: {
        type: String,
        default: 'images/default-avatar.jpg'
    },
    linkedinProfile: {
        type: String,
        validate: {
            validator: text => text.indexOf('https://www.linkedin.com') === 0,
            message: "Este campo precisa começar com 'https://www.linkedin.com'"
        }
    },
    userWebsite: {
        type: String,
        validate: {
            validator: value => validator.isURL(value),
            message: 'Este campo precisa ser uma url válida'
        }
    },
    carPlate: {
        type: String,
        validate: {
            validator: value => validator.isLicensePlate(value, 'pt-BR'),
            message: 'Este campo precisa ter uma placa válida'
        }
    }
}, {timestamps: true})

export default mongoose.model('User', userSchema)