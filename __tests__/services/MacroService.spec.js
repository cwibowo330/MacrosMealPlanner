import {
  macroToCals,
  reconcileMacros,
  metMacros,
  calculateTargetMacros,
} from '../../app/services/MacroService';

describe('macroToCals', () => {
  describe('given fats', () => {
    const amt = macroToCals('fats', 100);

    it('returns the right amount', () => {
      expect(amt).toEqual(100 / 9);
    });
  });
  describe('given proteins or fats', () => {
    const amt = macroToCals('proteins', 100);

    it('returns the right amount', () => {
      expect(amt).toEqual(100 / 4);
    });
  });
});

describe('calculateTargetMacros', () => {
  describe('given grams', () => {
    const result = calculateTargetMacros(100, 7);

    it('calculates the right macro target', () => {
      expect(result).toEqual(100 * 7);
    });
  });
});

describe('metMacros', () => {
  describe('given the targetTotalMacro and currentTotalMacro', () => {
    it('calculates the percentage met', () => {
      const percentage = metMacros(80, 250);
      expect(percentage).toEqual((80 * 100) / 250);
    });
  });
});

describe('reconcileMacros', () => {
  describe('given updated calories', () => {
    const action = { type: 'calories', value: 1200 };
    const state = {
      calories:     1500,
      days:         5,
      proteins:     25,
      proteinGrams: (1500 * 0.25) / 4,
      proteinTotal: (1500 * 0.25 /  4) *  5,
      fats:         35,
      fatGrams:     (1500 * 0.35) / 9,
      fatTotal:     (1500 * 0.35 / 9) *  5,
      carbs:        35,
      carbGrams:    (1500 * 0.35) / 4,
      carbTotal:    (1500 * 0.35 / 4) *  5,
    };
    const expectedState = {
      calories:     1200,
      days:         5,
      proteins:     25,
      proteinGrams: (1200 * 0.25) / 4,
      proteinTotal: (1200 * 0.25 / 4) *  5,
      fats:         35,
      fatGrams:     (1200 * 0.35) / 9,
      fatTotal:     (1200 * 0.35 / 9) *  5,
      carbs:        35,
      carbGrams:    (1200 * 0.35) / 4,
      carbTotal:    (1200 * 0.35 / 4) *  5,
    };

    const newState = reconcileMacros(action, state);

    it('updates the gram counts', () => {
      expect(newState).toEqual(expectedState);
    });
  });
});
