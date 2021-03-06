const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        lowercase: true,
        required: true
    },
    username: {
        type: String,
        lowercase: true,
        trim: true,
        index: true,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});
UserSchema.pre('save', function(next) {
    const user = this;
    // hash the password along with our new salt
    bcrypt.hash(user.password, 10, (err, hash) => {
        if (err) return next(err);

        user.password = hash;
        return next();
    });
});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
        if (err) return cb(err);

        cb(null, isMatch);
    });
};

module.exports = mongoose.model('User', UserSchema);
