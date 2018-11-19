export default {
  'GET /api/test' (req,res){
    setTimeout(()=>{
      res.json({
        code:0,
        respData:{
          accBillDate: '201810',
          billDate: '16',
          thisBillMoneyRMB: Math.ceil(Math.random() * 10000),
          thisBillMoneyFOR: Math.ceil(Math.random() * 10000),
          thisBillMoneyRMBSign: '+',
          thisBillMoneyFORSign: '+',
          toBillDateDays: '20191010',
          leastBackMon: Math.ceil(Math.random() * 10000),
          lowerForeignAmt:Math.ceil(Math.random() * 10000),
          backMonEndData: '20181111',
          initFlag: Math.round(Math.random())
        }
      })
    },1000)
  },
  'GET /api/user' (req,res){
    setTimeout(()=>{
      res.json({
        code:0,
        respData:{
          accBillDate: '201810',
          billDate: '16',
          thisBillMoneyRMB: Math.ceil(Math.random() * 10000),
          thisBillMoneyFOR: Math.ceil(Math.random() * 10000),
          thisBillMoneyRMBSign: '+',
          thisBillMoneyFORSign: '+',
          toBillDateDays: '20191010',
          leastBackMon: Math.ceil(Math.random() * 10000),
          lowerForeignAmt:Math.ceil(Math.random() * 10000),
          backMonEndData: '20181111',
          initFlag: Math.round(Math.random())
        }
      })
    },1000)
  }
};
