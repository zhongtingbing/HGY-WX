import 'babel-polyfill';
import dva from 'dva';
import  { postJson } from './utils/request';

import './index.less';

// 1. Initialize
const app = dva({
  onError(err, dispatch) {
    if (err.resp) {
      console.error(err.resp.msg);
    } else if (err.srv) {
      console.error(err.srv.msg);
    } else {
      console.error(err);
    }
  }
});

// 2. Plugins
// app.use();

// 3. Model
// Moved to router.js

// 4. Router
app.router(require('./router.jsx'));

// 5. Start

// export function init() {
//   postJson(`api/emp/app/basic/login`,{
//     loginName: '13606047513',
//     password: '047513'
//   }).then(res => {
//      app.start('#root');
//    })
// }

// init()
setTimeout(() => {window._dispatch = app._store.dispatch},100)
 app.start('#root');
//   wx.config({
//   debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
//   appId: 'wxf434ecf615ba0594', // 必填，公众号的唯一标识
//   timestamp: Date.parse(new Date()), // 必填，生成签名的时间戳
//   nonceStr: 'gfdgdf', // 必填，生成签名的随机串
//   signature: '4234234324',// 必填，签名，见附录1
//   jsApiList: ["openLocation"] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
// });
