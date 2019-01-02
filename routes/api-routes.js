
const employeeList = [
  {
    name: 'Matthew'
  }
]

module.exports = function(app) {

  app.get('/api/data', function(req, res) {
      res.json(employeeList)
  });
}