//****************** PLUGINS ***********************
var mongoose = require('mongoose');
//****************** MODEL *************************
//****************** TYPES *************************
var Schema = mongoose.Schema;

//****************** SCHEMA ************************
/** UserSchema
*@namespace
*/
var UserSchema = mongoose.Schema({
    /**
     * The email of the user.
     * @memberOf UserSchema
     */
    email: {
        type: String,
        required: true
    },
    /**
     * The last name of the user.
     * @memberOf UserSchema
     */
    firstName: {
        type: String,
        required: true
    },
    /**
     * The last name of the user.
     * @memberOf UserSchema
     */
    lastName: {
        type: String,
        required: true
    },
    /**
     * The password of the user used for log in.
     * @memberOf UserSchema
     */
    password: {
        type: String,
        required: true
    },
    /**
     * The string needed for hashing the password.
     * @memberOf UserSchema
     */
    salt: {
        type: String,
        required: true
    },
    /**
     * The status of the user , if is true then the user is inactive.
     * @memberOf UserSchema
     */
    inactive: {
        type: Boolean
    }
});
module.exports = mongoose.
model('User', UserSchema);
