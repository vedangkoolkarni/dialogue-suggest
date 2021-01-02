const initialState = {
  searchKeyword: 'unagi'
};
const rootReducer = (state = initialState, action) => {
  if(action.type === 'BASIC_DIALOGUE_SEARCH') {
    return {
      ...state,
      searchKeyword: action.searchKeyword
    };
  } else {
    return state;
  }
};
export default rootReducer;