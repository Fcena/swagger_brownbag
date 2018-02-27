'use strict';

import fs from 'fs';
import express from 'express';
import SwaggerExpress from 'swagger-express-mw';
import cors from 'cors';
import lokijs from 'lokijs';
export const db = new lokijs('shoppingList.db');

export const app = express();
app.use(cors());

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
