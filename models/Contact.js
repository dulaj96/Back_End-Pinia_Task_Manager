const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'First name is required'],
        minLength: 3,
        maxLength: 40,
        trim: true,
        validate: {
            validator: function(value) {
                const nameRegex = /^[a-zA-Z\s]*$/;
                return nameRegex.test(value);
            },
            message: 'First name must container only alphabetic characters'
        }
    },
    // lastName: {
    //     type: String,
    //     required: [true, 'Last name is required']
    // },
    // emailAddress: {
    //     type: String,
    //     required: true,
    //     unique: true
    // },
    // age: {
    //     type: Number,
    //     required: false
    // },
    completed: {
        type: Boolean,
        required: false
    }
})

module.exports = mongoose.model('Contact', contactSchema);