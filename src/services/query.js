
import  { getJson, postJson } from '../utils/request';
const isDevelopment= process.env.NODE_ENV ==='development';
const GLOBAL_GET_URL = isDevelopment ? 'api/emp/app':`/emp/app`
const _href = window.location.href;
const queryStr = _href.split('?')[1];
export function worksConditionService() {
  return getJson(`${GLOBAL_GET_URL}/labour/project/info?${queryStr}`);
}
export function testService() {
  return getJson(`test`,{
    signature: '3232',
    timestamp: Date.parse(new Date()),
    nonce: '4322',
    echostr: '7878dfsdfsdfsd'
  });
}

export function querySaleChanceService(param) {
  return postJson('querySaleChanceService', {...param})
}
