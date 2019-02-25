import { queryGoodsListService } from '../services/query';


export default {
  namespace: 'shop',
  state: {
    goodList:[]
  },
  reducers: {
    save(state, action) {
      return {...state, ...action.payload};
    },
    update(state, action) {
      return {...state, ...action.payload};
    }
  },
  effects: {
    queryGoodsList({ payload }, { call, put }) {  // eslint-disable-line
      return queryGoodsListService()
    },
  },

};
