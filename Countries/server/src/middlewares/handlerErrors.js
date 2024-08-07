const handlerErrors = (err, req, res, next) => {
  const status = err.status || 500; 
  const message = err.message || err; 
  console.error(err); 
  res.status(status).send(message);
  next();
};

module.exports = { handlerErrors };
