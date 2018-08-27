import { combineReducers } from 'redux';
let initialState = { room: {}, step: 0 };

const roomData = (state = initialState, action) => {
  switch (action.type) {
    case 'NEXT':
      return {
        ...state,
        step: step + 1
      };
    case 'PRE':
      return { ...state, step: step - 1 };
    default:
      return state;
  }
};

export default combineReducers({
  roomData
});
