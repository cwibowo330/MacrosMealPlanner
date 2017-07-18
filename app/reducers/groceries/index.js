const initialState = [];


function groceries(state = initialState, action) {
  console.log('reducer()::state', state);
  console.log('reducer()::action', action);
  const stateCopy = JSON.parse(JSON.stringify(state));

  // if (action.type === UPDATE_MACRO) {
  //   const newState = reconcileMacros(action, state);

  //   stateCopy[action.macro] = action.value;
  // }

  return stateCopy;
}


export default groceries;
