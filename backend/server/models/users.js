import mongoose from 'mongoose'
var uuidv1 = require('uuidv1')
import crypto from 'crypto';
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true
    },
    hashed_password: {
        type: String,
        trim:true,
        // required: true
    },
    salt:String,
    created: {
        type: Date,
        default: Date.now
    },
    instructor: {
        type: String,
        default: "no"
    },
},
    {
        versionKey: false
    })

UserSchema.virtual('id').get(function () {
    return this._id.toHexString();
})


// virtual field
UserSchema
    .virtual("password")
    .set(function(password) {
        // create temporary variable called _password
        this._password = password;
        // generate a timestamp
        this.salt = uuidv1();
        // encryptPassword()
        this.hashed_password = this.encryptPassword(password);
    })
    .get(function() {
        return this._password;
    });

// methods
UserSchema.methods = {

    authenticate: function(plainText) {
        return this.encryptPassword(plainText) === this.hashed_password;
    },
    
    encryptPassword: function(password) {
        if (!password) return "";
        try {
            return crypto
                .createHmac("sha1", this.salt)
                .update(password)
                .digest("hex");
        } catch (err) {
            return "";
        }
    }
};


module.exports = mongoose.model("User", UserSchema);