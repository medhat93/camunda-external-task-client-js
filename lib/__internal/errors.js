// Client
const MISSING_BASE_URL = 'Couldn\'t instantiate Client, missing configuration parameter \'baseUrl\'';
const WRONG_INTERCEPTOR = 'Interceptors should be a function or an array of functions';
const WRONG_MIDDLEWARES = 'Middleware(s) should be a function or an array of functions';
const ALREADY_REGISTERED = 'Subscription failed, already subscribed to topic';
const MISSING_HANDLER = 'Subscription failed, missing handler function';

// Task Client
const MISSING_TASK = 'Couldn\'t complete task, task id is missing';
const MISSING_ERROR_CODE = 'Couldn\'t throw BPMN Error, no error code was provided.';
const MISSING_NEW_DURATION = 'Couldn\'t extend lock time, no new duration was provided.';

// Basic Auth Interceptor
const MISSING_AUTH_PARAMS = 'Couldn\'t instantiate BasicAuthInterceptor, missing configuration parameter ' +
  '\'username\' or \'password\'';



module.exports = {
  MISSING_BASE_URL,
  ALREADY_REGISTERED,
  MISSING_HANDLER,
  MISSING_TASK,
  WRONG_INTERCEPTOR,
  MISSING_ERROR_CODE,
  MISSING_NEW_DURATION,
  MISSING_AUTH_PARAMS,
  WRONG_MIDDLEWARES
};