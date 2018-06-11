const configValues = require('./config');

module.exports={

    getLocalDb :function () {
    return 'mongodb://'+configValues.host+'/'+configValues.dbName;
  }

  };
