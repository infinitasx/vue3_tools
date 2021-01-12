import * as Request from '../utils/request';

export function getMock(data) {
  return Request.get('/test', data);
}

export function postMock(data) {
  return Request.post('/test', data);
}
