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
