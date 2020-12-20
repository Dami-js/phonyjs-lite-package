/* eslint-disable no-unused-vars */
import log, { ILog } from './customLog';

interface IHelperFunctions {
  log: (a: ILog) => void;
}

const helperFunctions: IHelperFunctions = { log };

export default helperFunctions;
