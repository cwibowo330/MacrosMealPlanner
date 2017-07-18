// function reducer(state = {}/* , action*/) {
//   return state;
// }


// export default reducer;




import { UPDATE_USERSETTING } from '../../actions';
import { reconcileMacros } from '../../services/MacroService';

const initialState = {
  calories:     0,
  days:         0,
  proteins:     0,
  proteinGrams: 0,
  fats:         0,
  fatGrams:     0,
  carbs:        0,
  carbGrams:    0,
};

function userSettings(state = initialState, action) {
  console.log('reducer()::state', state);
  console.log('reducer()::action', action);
  const stateCopy = JSON.parse(JSON.stringify(state));

  if (action.type === UPDATE_USERSETTING) {
    const newState = reconcileMacros(action, state);

    stateCopy[action.macro] = action.value;
  }

  return stateCopy;
}


export default userSettings;
