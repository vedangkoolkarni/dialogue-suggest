const redux = require('redux');

const initialState = {
  searchKeyword: 'unagi'
};
const rootReducer = (state = initialState, action) => {
  if (action.type === 'SEARCH_DEFAULT') {
    return {
      ...state,
      searchKeyword: action.value
    };
  } else {
    return state;
  }
};

const store = redux.createStore(rootReducer);
store.subscribe(() => {
  console.log('store updated as : ', store.getState());
});
console.log('store: ', store.getState());
store.dispatch({ type: 'SEARCH_DEFAULT', value: 'hairpiece' });
console.log('store: ', store.getState());
