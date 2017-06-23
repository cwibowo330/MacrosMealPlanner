import {
  macroToCals,
  reconcileMacros,
} from '../../app/services/MacroService';

describe('macroToCals', () => {
  describe('given fats', () => {
    const amt = macroToCals('fats', 100);

    it('returns the right amount', () => {
      expect(amt).toEqual(100 / 9);
    });
  });
});

describe('reconcileMacros', () => {
  describe('given updated calories', () => {
    const action = { type: 'calories', value: 1000 };
    const state = {
      calories:     1500,
      proteins:     25,
      proteinGrams: (1500 * 0.25) / 4,
      fats:         35,
      fatGrams:     (1500 * 0.35) / 9,
      carbs:        35,
      carbGrams:    (1500 * 0.35) / 4,
    };
    const expectedState = {
      calories:     1000,
      proteins:     25,
      proteinGrams: (1000 * 0.25) / 4,
      fats:         35,
      fatGrams:     (1000 * 0.35) / 9,
      carbs:        35,
      carbGrams:    (1000 * 0.35) / 4,
    };

    const newState = reconcileMacros(action, state);

    it('updates the gram counts', () => {
      expect(newState).toEqual(expectedState);
    });
  });
});
