var configValues = require('./config');

module.exports = {

    getDbConnectionString: function(){
        return 'mongodb://' + configValues.uname + 
        ':' + configValues.pwd + 
        'ec2-54-65-234-160.ap-northeast-1.compute.amazonaws.com:27017/ami_main_db';
    }
}