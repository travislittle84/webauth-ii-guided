module.exports = (req, res, next) => {
  if(req.session && req.session.user) { 
    next() // if there is a session and a session user? if there is, they're good to go
  } else {
    res.status(401).json({ message: 'you shall not pass'})
  }
};
