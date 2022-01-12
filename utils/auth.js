const withAuth = (req, res, next) => {
  //this is to authenticate whether a user is logged in or not. If thery are nnot loggged in, the rquest needs to redirect to the login route. 
  if (!req.session.logged_in) {
    res.refirect('/login');
  } else {
    next();
  }
};
module.exports = withAuth;