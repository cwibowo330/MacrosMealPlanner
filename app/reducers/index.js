import { UPDATE_MACRO } from '../actions';

const initialState = {
  macros: {
    calories: 0,
    fats:     0,
  },
};

function reducer(state = initialState, action) {
  console.log('reducer()::state', state);
  console.log('reducer()::action', action);
  const stateCopy = JSON.parse(JSON.stringify(state));

  if (action.type === UPDATE_MACRO) {
    stateCopy.macros = { calories: action.calories };
  }

  return stateCopy;
}

export default reducer;
