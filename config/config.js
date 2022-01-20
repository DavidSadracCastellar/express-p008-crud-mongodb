const path = require('path');
const rootPath = path.normalize(__dirname + '/..');
const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    root: rootPath,
    app: {
      name: 'practica008-express-mongodb'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/practica008ExpressMongodbDev'
  },

  test: {
    root: rootPath,
    app: {
      name: 'practica008-express-mongodb'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/practica008-express-mongodb-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'practica008-express-mongodb'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/practica008-express-mongodb-production'
  }
};

module.exports = config[env];
