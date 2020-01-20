const crypto = require('crypto');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'subscriber', 'moderator', 'staff', 'admin'],
        default: 'user'
    },
    email: {
        type: String,
        required: [true, 'Please provide your email'],
        unique: true,
        lowercase: true
    },
    emailVerified: {
        type: Boolean,
        default: false
    },
    password: {
        type: String,
        required: [true, "Please provide password"],
        minlength: 8,
        select: false
    },
    mobilePhoneNumber: {
        type: Number,
    },
    // passwordConfirm: {
    //     type: String,
    //     // required: [true, 'Please confirm your password']
    // },
    photo: String,
    createdAt: {
        type: Date,
        default: Date.now()
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
    active: {
        type: Boolean,
        default: true,
        select: false
    },
    posts: Array,
    location: String,
    disabled: { type: Boolean },
    deleted: { type: Boolean, default: false },
})

// userSchema.methods.hasPermission = function (roleToCheck) {
//     const roles = ['Super Admin', 'Admin', 'Mod', 'User', 'Guest'];
//     let user = this;

//     for (let role of user.roles) {
//         if (roles.indexOf(role) <= roles.indexOf(roleToCheck)) {
//             return true;
//         }
//     }

//     return false;
// }

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 12);
    this.passwordConfirm = undefined;
    next();
})

userSchema.pre('save', function (next) {
    if (!this.isModified('password') || this.isNew) return next();
    this.passwordChangedAt = Date.now() - 1000;
    next();
})

userSchema.methods.correctPassword = async function (candidatePassword, userPassword) {
    return await bcrypt.compare(candidatePassword, userPassword);
}

userSchema.method.changePasswordAfter = function (JWTimestamp) {
    if (this.passwordChangedAt) {
        console.log(this.passwordChangedAt, JWTimestamp)
    }

    return false;
}

userSchema.methods.createPasswordResetToken = function () {
    const resetToken = crypto.randomBytes(32).toString('hex');

    this.passwordResetToken = crypto.createHash('sha256').update(resetToken).digest('hex');
    console.log({ resetToken }, this.passwordResetToken)
    this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

    return resetToken;
}

// userSchema.methods.forgotPassword = function() {
//     const user await. 
// }


// userSchema.methods.signup = function () {
//     const token = jwt.sign({ id: newUser._id }, process, env.JWT_SECRET, {
//         expiresIn: process.env.JWT_EXPIRES_IN
//     });
//     res.status(201).json({
//         status: 'success',
//         token,
//         data: {
//             user: newUser
//         }
//     })
// }

module.exports = mongoose.model("User", userSchema);