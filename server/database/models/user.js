const mongoose = require('mongoose');
const crypto = require('crypto');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    name: {
        type: String,
        required: false,
        unique: false
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    hash: String,
    salt: String
})
 
userSchema.methods.setPassword = function (password) {
    this.salt = crypto
        .randomBytes(16)
        .toString('hex');
    this.hash = crypto
        .pbkdf2Sync(password, this.salt, 1000, 512, 'sha512')
        .toString('hex');
};

userSchema.methods.validPassword = function (password) {
    let hash = crypto
        .pbkdf2Sync(password, this.salt, 1000, 512, 'sha512')
        .toString('hex');

    return this.hash === hash;
}

mongoose.model('user', userSchema); 