import { Request, Response } from 'express';
import { successResponse } from '../helpers/methods';

type ReqDictionary = {};
type ReqBody = any;
type ReqQuery = { names: string };
type ResBody = {
  status: boolean;
  message: string;
  package?: Record<string, any>;
  payload?: Record<string, any>;
};
type getNamesHandlerRequest = Request<ReqDictionary, ResBody, ReqBody, ReqQuery>;

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
export const index = async (req: Request, res: Response): Promise<void> => {
  res.send(
    successResponse('Express JS with TypeScript', {
      data: 'working fine',
    }),
  );
};

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
export const getNames = async (req: getNamesHandlerRequest, res: Response): Promise<void> => {
  console.log('req params - ', req.params);
  console.log('req query - ', req.query);
  let nameString: string = req.query.names;
  let namesArr: string[] = [];
  if (req.query && req.query.names) {
    namesArr = nameString
      .split(',')
      .sort()
      .map((str) => str.charAt(0).toUpperCase() + str.slice(1));
  }
  res.send(
    successResponse('Names converted!', {
      data: namesArr,
    }),
  );
};
