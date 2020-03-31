console.log('starting function');

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({ region: 'ap-south-1' });

exports.handle = function (e, ctx, callback) {

  let scanningParameter = {
    TableName: 'guestbook',
    List: 100
  };

  docClient.scan(scanningParameter, function (err, data) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });


  /* var param = {
    TableName: 'guestbook',
    Key: {
      "date":1585589551605
    }
  };

  docClient.get(param, function (err, data) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  }); */


}
