// =================== CALCULATE GROCERIES FUNCTIONS ================== 
export function addMacrosToGroceries(macros, groceriesState) {
  // check if macrosState has a greater count than 1
  const addToGroceries = macros.filter((macro) => {
    return macro.count > 0;
  });
  // pushes counts greater than 1 into groceries state
  const groceriesStateCopy = JSON.parse(JSON.stringify(groceriesState));
  groceriesStateCopy.push(addToGroceries);
}

// function for adding groceries
export function addGroceries(groceriesState, name) {
  if (checkIfGroceryExist(name, state) === 'true') {
    item.count += 1;
  }

  return item;
}

// function for deleting groceries
export function deleteGroceries(groceriesState, name) {
  if (checkIfGroceryExist(name, state) === 'true') {
    item.count -= 1;
  }

  return item;
}

// check if grocery exists in groceryList 
export function checkIfGroceryExist (name, groceriesState) {
  groceriesState.filter((item) => {
    if (item.name === name) {
      return true;
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

// function for calculating if macros have been met
export function metMacros(targetMacrosAmt, currentMacrosAmt){
  // totalMacrosAmt = proteinGrams * days
  // currentMacrosAmt = calculate total amount from groceries state
   totalMarcosAmt - currentMacrosAmt / totalMarcosAmt; //equals percentage amount
};

export function reconcileMacros({ type, value }, state) {
  const copy = JSON.parse(JSON.stringify(state));

  copy[type] = value;
  copy.fats = copy.fats;
  copy.carbs = copy.carbs;
  copy.proteinGrams = macroToCals('proteins', getDailyRequired(copy.calories, copy.proteins));
  copy.fatGrams = macroToCals('fats', getDailyRequired(copy.calories, copy.fats));
  copy.carbGrams = macroToCals('carbs', getDailyRequired(copy.calories, copy.carbs));

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
