const express = require('express');

const routesV1 = require('./routes/v1');

const app = express();

routesV1(app);


app.listen(3000, () => {
  console.log('running on 3000');
});
