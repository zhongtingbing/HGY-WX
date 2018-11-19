
import  { getJson } from '../utils/request';


export function query() {
  return getJson('/api/mamresource/appstore/json/iosApps.json');
}

export function testService() {
  return  getJson('/api/test');
}
