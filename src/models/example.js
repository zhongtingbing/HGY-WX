import { query } from '../services/example';


export default {

  namespace: 'example',

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
