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
      calories: action.calories,
      days:     state.macros.days,
      proteins: state.macros.proteins,
      fats:     state.macros.fats,
      carbs:    state.macros.carbs,
    };
  } else if (action.type === UPDATE_DAYS) {
    stateCopy.macros = {
      calories: state.macros.calories,
      days:     action.days,
      proteins: state.macros.proteins,
      fats:     state.macros.fats,
      carbs:    state.macros.carbs,
    };
  } else if (action.type === UPDATE_PROTEINS) {
    stateCopy.macros = {
      calories: state.macros.calories,
      days:     state.macros.days,
      proteins: action.proteins,
      fats:     state.macros.fats,
      carbs:    state.macros.carbs,
    };
  } else if (action.type === UPDATE_FATS) {
    stateCopy.macros = {
      calories: state.macros.calories,
      days:     state.macros.days,
      proteins: state.macros.proteins,
      fats:     action.fats,
      carbs:    state.macros.carbs,
    };
  } else if (action.type === UPDATE_CARBS) {
    stateCopy.macros = {
      calories: state.macros.calories,
      days:     state.macros.days,
      proteins: state.macros.proteins,
      fats:     state.macros.fats,
      carbs:    action.carbs,
    };
  }

  return stateCopy;
}


export default reducer;
