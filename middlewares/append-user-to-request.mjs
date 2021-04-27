import { verify } from '../helpers/jwt.mjs'

export default (req, res, next) => {
  const jwtToken = req.headers.authorization;

  if(jwtToken) {
    const token = jwtToken.replace('Bearer', '').trim();
    const user = verify(token);
    req.authUser = {
      token,
      user
    }
  }

  return next();
}