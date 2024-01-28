import { StandardLightToggleStrategy } from './StandardLightToggleStrategy';
import { expect, test } from 'vitest';

test('StandardLightToggleStrategy should toggle the selected light and adjacent lights', () => {
  const strategy = new StandardLightToggleStrategy();

  // Create a 3x3 grid
  let grid = Array.from({ length: 3 }, () => new Array(3).fill(false));

  // Toggling the center light
  grid = strategy.toggle(grid, 1, 1);

  // Expected grid state after toggle
  const expectedGrid = [
    [false, true, false],
    [true, true, true],
    [false, true, false]
  ];

  expect(grid).toEqual(expectedGrid);
});
