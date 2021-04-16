import jsonwebtoken from 'jsonwebtoken'
const privateKey = 'react-node-jwt-token-key';
const expirationTime = 604800;

export const jwtEncode = (user) => {
  return new Promise((resolve, reject) => {
    jsonwebtoken.sign(
      user,
      privateKey,
      {
        expiresIn: expirationTime,
      },
      (err, token) => {
        if(err) {
          return reject(err)
        }

        resolve(token)
      }
    );
  })
}

export const verify = (token) => {
  return jsonwebtoken.verify(token, privateKey);
}