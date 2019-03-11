export default {
  'GET /test' (req,res){
    const echostr = req.query.echostr
    setTimeout(()=>{
      res.json({
        echostr
      })
      // res.json({
      //   echostr: req.query.echostr,
      // })
    },200)
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
    },100)
  },
  'POST /querySaleChanceService' (req,res){
    let list = [];
    for(let i = 0; i < 5; i++ ){
      list.push({
        name: 'dd',
        age: 'eeee'
      })
    }
    setTimeout(()=>{
      res.json({
        code:0,
        list: list,
        totalSize: 20
      })
    },100)
  },

  'POST /queryGoodsListService' (req,res){
    let list = [];
    for(let i = 0; i < 20; i++ ){
      list.push({
        name: '人脸识别急',
        brand: '中控',
        version: 'A209',
        price: 4000,
        id: i,
      })
    }
    setTimeout(()=>{
      res.json({
        code:0,
        list: list,
        totalSize: 20
      })
    },100)
  },
};
