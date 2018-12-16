import { query } from '../services/query';


export default {

  namespace: 'main',

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    }
  },

  effects: {
    query({ payload }, { call, put }) {  // eslint-disable-line
      query().then(res => {
        console.log(res)
      })
    },
  },

  reducers: {
    save(state, action) {
      return {...state, ...action.payload};
    }
  }

};
