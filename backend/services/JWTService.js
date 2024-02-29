const jwt = require("jsonwebtoken");
const {ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET} = require("../config/index");

class JWTService {
  //sign access token
  signAccessToken(payload, expiryTime) {
    return jwt.sign(payload, ACCESS_TOKEN_SECRET, { expireIn: expireTime });
  }
  // sign refresh token
  signRefreshToken(payload, expiryTime) {
    return jwt.sign(payload, REFRESH_TOKEN_SECRET, { expireIn: expireTime });
  }
  // verify access token
  // verify refresh token
  // store refresh token
}
