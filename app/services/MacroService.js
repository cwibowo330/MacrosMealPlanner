export function macroToCals(type, amount) {
  if (type === 'fats') {
    return Number(amount) / 9;
  }

  return Number(amount) / 4;
}

export function getDailyRequired(cals, perc) {
  return (Number(cals) * Number(perc)) / 100;
}

// export function macroTotal(value) {
//   return (100 - value) / 2;
// }

// function for adding groceries
// export function addGroceries(state) {
//   const macrosCopy = JSON.parse(JSON.stringify(state));
//   const groceryList = macrosCopy.filter(arr => (arr){
//    return arr[count] > 0; 
//   });
  
// }

// function for deleting groceries
export function deleteGroceries(state) {
  
}


// function for calculating if currentTotal macros from grocery, if count is more than 1 then add.



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
