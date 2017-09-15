module.exports = () => {
  return [
    { method: 'GET', path: '/api/helloWorld', handler: require('./helloWorld').get() }
  ]
}
