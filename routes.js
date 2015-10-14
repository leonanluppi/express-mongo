module.exports = (app) => {
  app.use('/tasks', require('./api/tasks'));
  app.use('/books', require('./api/books'));
};