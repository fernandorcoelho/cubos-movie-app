import { AnyAction, combineReducers } from 'redux';

function exampleReducer(state = {}, action: AnyAction) {
  switch (action.type) {
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  example: exampleReducer,
});

export default rootReducer;
