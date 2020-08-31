var jwt = require('express-jwt');
var secret = require('../config').secret;

function getTokenFromHeader(req) {
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Token' ||
    req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    return req.headers.authorization.split(' ')[1];
  }

  return null;
}

var auth = {
  required: jwt({
    secret: secret,
    userProperty: 'usuario',
    getToken: getTokenFromHeader
  }),
  optional: jwt({
    secret: secret,
    userProperty: 'usuario',
    credentialsRequired: false,
    getToken: getTokenFromHeader
  })
};

module.exports = auth;