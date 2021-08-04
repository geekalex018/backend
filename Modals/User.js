const mongoose = require('mongoose')

const student = new mongoose.Schema({

    Name: {
        type: String,
        required: [true, 'Name must be present']
    },
    UserName: {
        type: String,
        required: [true, 'please provide a user name']
    },

    Password: {
        type: String,
        required: [true, 'please write a password'],
        min: 4,
        max: 20
    },
    ConfirmPassword: {
        type: String,
        required: [true, 'Please confirm your password'],
        validate: {
            // This only works on CREATE and SAVE!!!
            validator: function (el) {
                return el === this.Password;
            },
            message: 'Passwords are not the same!'
        }
    },

    ZipCode: {
        type: Number,
        required: [true, 'please provide a zip code']
    },
    ProfileImage: {
        type: mongoose.Schema.ObjectId,
        ref: 'image'
    }

})
const studentSchema = mongoose.model('studentSchema', student)
module.exports = studentSchema