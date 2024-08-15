export default logger = function (req, res, next) {
  console.log(`Request: ${req.method} ${req.originalUrl} (${new Date().toLocaleString('es-ES')})`);
  next();
};
