
import  { getJson } from '../utils/request';
const isDevelopment= process.env.NODE_ENV ==='development';
const GLOBAL_GET_URL = isDevelopment?'api/emp/app':`/emp/app`
const _href = window.location.href;
const queryStr = _href.split('?')[1];
export function worksConditionService() {
  return getJson(`${GLOBAL_GET_URL}/labour/project/info?${queryStr}`);
}

export function worksCondition2Service() {
  return getJson(`${GLOBAL_GET_URL}/labour/company/labourInfos?${queryStr}`);
}

export function superVisionService() {
  return getJson(`${GLOBAL_GET_URL}/supervise/map/projects?${queryStr}`);
}
export function supplyChainService() {
  return getJson(`${GLOBAL_GET_URL}/supplyChain/project/info?${queryStr}`);
}

export function supplyChain2Service() {
  return getJson(`${GLOBAL_GET_URL}/supplyChain/company/supplyChainInfos?${queryStr}`);
}

export function ProcessManagement2Service() {
  return getJson(`${GLOBAL_GET_URL}/workstage/company/workstageInfos?${queryStr}`);
}
export function ProcessManagementService() {
  return getJson(`${GLOBAL_GET_URL}/workstage/project/info?${queryStr}`);
}

export function safeInfoService() {
  return getJson(`${GLOBAL_GET_URL}/civilization/project/info?${queryStr}`);
}

export function safeInfo2Service() {
  return getJson(`${GLOBAL_GET_URL}/civilization/company/civilizationInfos?${queryStr}`);
}

export function projectOverviewService() {
  return getJson(`${GLOBAL_GET_URL}/basic/project/summary?${queryStr}`);
}
