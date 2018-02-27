'use strict';

import fs from 'fs';
import express from 'express';
import SwaggerExpress from 'swagger-express-mw';

export const app = express();

const config = {
  appRoot: __dirname, // required config
  // swaggerFile: __dirname + '/src/api/swagger/swagger.yaml',
};

SwaggerExpress.create(config, (err, swaggerExpress) => {
  if (err) {
    throw err;
  }

  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 10010;
  app.listen(port);

  if (swaggerExpress.runner.swagger.paths['/hello']) {
    console.log(
      'try this:\ncurl http://127.0.0.1:' + port + '/hello?name=Scott'
    );
  }
});
