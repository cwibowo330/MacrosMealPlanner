import { UPDATE_CALORIES,
         UPDATE_DAYS,
         UPDATE_PROTEINS,
         UPDATE_FATS,
         UPDATE_CARBS,
         UPDATE_MACRO,
       } from '../../actions';
import { reconcileMacros } from '../../services/MacroService';

const initialState = {
  calories:     0,
  days:         0,
  proteins:     0,
  proteinGrams: 0,
  fats:         0,
  carbs:        0,
};

function macros(state = initialState, action) {
  console.log('reducer()::state', state);
  console.log('reducer()::action', action);
  const stateCopy = JSON.parse(JSON.stringify(state));

  if (action.type === UPDATE_MACRO) {
    const newState = reconcileMacros(action);

    stateCopy[action.macro] = action.value;
  }

  if (action.type === UPDATE_CALORIES) {
    stateCopy.calories = action.calories;
  } else if (action.type === UPDATE_DAYS) {
    stateCopy.days = action.days;
  } else if (action.type === UPDATE_PROTEINS) {
    stateCopy.proteins = action.proteins;
  } else if (action.type === UPDATE_FATS) {
    stateCopy.fats = action.fats;
  } else if (action.type === UPDATE_CARBS) {
    stateCopy.carbs = action.carbs;
  }

  return stateCopy;
}


export default macros;
