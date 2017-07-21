// =================== CALCULATE GROCERIES FUNCTIONS ================== 
export function pushMacrosToGroceries(macros, groceriesState) {
  // check if macrosState has a greater count than 1
  const addToGroceries = macros.filter((macro) => {
    return macro.count > 0;
  });
  // pushes counts greater than 1 into groceries state
  const groceriesStateCopy = JSON.parse(JSON.stringify(groceriesState));
  groceriesStateCopy.push(addToGroceries);
}

// function for adding macro count
export function addMacroCount(macrosState, name) {
  if (checkIfItemExist(name, macrosState) === 'true') {
    name.count -= 1;
    return name;
  }
  // should update grocery state after
}

// function for subtracting macro count
export function substractMacroCount(macrosState, name) {
  if (checkIfItemExist(name, macrosState) === 'true') {
    name.count -= 1;
    return name;
  }
  // should update grocery state after
}

// check if grocery exists in groceryList
export function checkIfItemExist(name, state) {
  state.filter((item) => {
    if (item.name === name) {
      return item;
    }
  });
}


// =================== CALCULATE USERSETTINGS FUNCTIONS ================== 
export function macroToCals(type, amount) {
  if (type === 'fats') {
    return Number(amount) / 9;
  }

  return Number(amount) / 4;
}

export function getDailyRequired(cals, perc) {
  return (Number(cals) * Number(perc)) / 100;
}

// calculate total target macros
export function calculateTargetMacros(grams, days) {
  return grams * days;
}

// function for calculating if macros have been met
export function metMacros(currentMacrosAmt, totalMarcosAmt) {
  return (currentMacrosAmt * 100) / totalMarcosAmt;
}

export function reconcileMacros({ type, value }, state) {
  const copy = JSON.parse(JSON.stringify(state));

  copy[type] = value;
  copy.days = copy.days;
  copy.fats = copy.fats;
  copy.carbs = copy.carbs;
  copy.proteinGrams = macroToCals('proteins',
                      getDailyRequired(copy.calories, copy.proteins));
  copy.proteinTotal = calculateTargetMacros(copy.proteinGrams, copy.days);
  copy.fatGrams = macroToCals('fats',
                  getDailyRequired(copy.calories, copy.fats));
  copy.fatTotal = calculateTargetMacros(copy.fatGrams, copy.days);
  copy.carbGrams = macroToCals('carbs',
                   getDailyRequired(copy.calories, copy.carbs));
  copy.carbTotal = calculateTargetMacros(copy.carbGrams, copy.days);

  return copy;
  // return {
  //   calories:     0,
  //   proteins:     0,
  //   proteinGrams: 0,
  //   fats:         0,
  //   fatGrams:     0,
  //   carbs:        0,
  //   carbGrams:    0,
  // };
}
