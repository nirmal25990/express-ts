import { Express } from 'express-serve-static-core';
import * as IndexController from '../controllers/index.controller';
const apiEndpoint = '/api';
/**
 *
 * @param app
 */

export const api = (app: Express) => {
  app.get('/', IndexController.index);
  app.get(`${apiEndpoint}/endpoint`, IndexController.getNames);
};
