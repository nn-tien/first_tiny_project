import { combineReducers } from 'redux';
let initialState = { city: '', district: '', address: '' };

const roomData = (state = initialState, action) => {
  switch (action.type) {
    case 'STEP1':
      return {
        ...state,
        city: action.city,
        district: action.district,
        address: action.address
      };
    case 'STEP2':
      return { ...state, isLogin: false, authToken: '', baseUser: {} };
    default:
      return state;
  }
};

export default combineReducers({
  roomData
});
