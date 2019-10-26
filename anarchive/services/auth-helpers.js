require('dotenv').config({path: '../../.env'});
const jwt = require('jsonwebtoken');

function createToken(user) {

    data = {
        id: user.id,
        username: user.username
    };
    const signature = process.env.JWT_SECRET;
    const expiration = '6h';

    return jwt.sign({data, }, signature, {expiresIn: expiration});
};

// function verifyToken(token, next) {
//     jwt.verify(token, process.env.JWT_SECRET, function(err, decoded) {
//         if (err) { next(err); }
//         // check exp date, etc. here ...
//         next(null, decoded);
//     });
// };

module.exports = {
    createToken
    // verifyToken
}
