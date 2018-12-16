
import  { getJson } from '../utils/request';
import session from '../utils/store'
const isDevelopment= process.env.NODE_ENV ==='development';
const GLOBAL_GET_URL = isDevelopment?'api/emp/app':`/emp/app`

const project_id = session.get(`$$project_id`) || 243;

export function worksConditionService() {
  return getJson(`${GLOBAL_GET_URL}/labour/info?project_id=${project_id}`);
}

export function superVisionService() {
  return getJson(`${GLOBAL_GET_URL}/supervise/info`);
}
export function supplyChainService() {
  return getJson(`${GLOBAL_GET_URL}/supplyChain/info`);
}

export function supplyChain2Service() {
  return getJson(`${GLOBAL_GET_URL}/supplyChain/project/info`);
}

export function ProcessManagement2Service() {
  return  getJson(`${GLOBAL_GET_URL}/workstage/project/info`);
}
export function ProcessManagementService() {
  return  getJson(`${GLOBAL_GET_URL}/workstage/info`);
}

export function safeInfoService() {
  return  getJson(`${GLOBAL_GET_URL}/civilization/info`);
}

export function safeInfo2Service() {
  return  getJson(`${GLOBAL_GET_URL}/civilization/project/info`);
}

export function worksCondition2Service() {
  return  getJson(`${GLOBAL_GET_URL}/labour/project/info`);
}
export function projectOverviewService() {
  return  getJson(`${GLOBAL_GET_URL}/basic/project/summary`);
}
