const axios = require('axios');
var options = {
  method: 'get',
  url: 'http://localhost:3100/',
  data: {
    "email": "wilsonli415@gmail.com",
    "name": "wilson li",
    "recipientId": "1",
    "clientUserId": '123'
  }
};

axios(options
).then((res) => {
  console.log(res);
    // this.setState({
    //   data: response.data,
    // });
  })
  .catch((error) => {
    console.log(error)
  });