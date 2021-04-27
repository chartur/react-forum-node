export default (req, res, next) => {
  if(!req.authUser) {
    return res.status(401)
      .json({
        message: 'Unauthorized user!'
      })
  }

  return next();
}