module.exports = (req, res, next) => {
  // fake logged-in user
  req.user = {
    id: "69dc39b2b291092218a5b856", // dummy Mongo ID
    role: "Admin"
  };
  next();
};