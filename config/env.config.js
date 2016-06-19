const env = {
  development: {
    mountPath: 'http://localhost:5656/',
    apiEndpoint: 'http://localhost:5858/'
  },
  stage: {
    mountPath: 'http://stage.com/',
    apiEndpoint: 'http://api.stage.com/'
  },
  production: {
    mountPath: 'http://production.com/',
    apiEndpoint: 'http://api.production.com/'
  }
}[process.env.NODE_ENV || 'production'];

module.exports = env;
