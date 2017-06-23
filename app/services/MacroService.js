export function macroToCals(type, amount) {
  if (type === 'fats') {
    return Number(amount) / 9;
  }

  return Number(amount) / 4;
}

export function getDailyRequired(cals, perc) {
  return (Number(cals) * Number(perc)) / 100;
}

export function reconcileMacros({ type, value }, state) {
  const copy = JSON.parse(JSON.stringify(state));

  copy[type] = value;

  copy.proteinGrams = macroToCals('proteins', getDailyRequired(copy.calories, copy.proteins));
  copy.fatGrams = (Number(copy.calories) * (Number(copy.fats) / 100)) / 9;
  copy.carbGrams = (Number(copy.calories) * (Number(copy.carbs) / 100)) / 4;

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
