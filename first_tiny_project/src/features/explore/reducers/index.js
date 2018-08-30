let initialState = { quickSearch: [] };

const exploreData = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return {
        ...state,
        quickSearch: action.quickSearch
      };
    case 'CLEAR_AUTH_DATA':
      return { ...state, authToken: '', baseUser: {} };
    default:
      return state;
  }
};

export default exploreData;
