import { UPDATE_CALORIES,
         UPDATE_DAYS,
         UPDATE_PROTEINS,
         UPDATE_FATS,
         UPDATE_CARBS,
       } from '../actions';

const initialState = {
  macros: {
    calories: 0,
    days:     0,
    proteins: 0,
    fats:     0,
    carbs:    0,
  },
};

function reducer(state = initialState, action) {
  console.log('reducer()::state', state);
  console.log('reducer()::action', action);
  const stateCopy = JSON.parse(JSON.stringify(state));

  if (action.type === UPDATE_CALORIES) {
    stateCopy.macros = {
      ...state.macros,
      calories: action.calories,
    };
  } else if (action.type === UPDATE_DAYS) {
    stateCopy.macros = {
      ...state.macros,
      days: action.days,
    };
  } else if (action.type === UPDATE_PROTEINS) {
    stateCopy.macros = {
      ...state.macros,
      proteins: action.proteins,
    };
  } else if (action.type === UPDATE_FATS) {
    stateCopy.macros = {
      ...state.macros,
      fats: action.fats,
    };
  } else if (action.type === UPDATE_CARBS) {
    stateCopy.macros = {
      ...state.macros,
      carbs: action.carbs,
    };
  }

  return stateCopy;
}


export default reducer;
