import { StandardLevel } from './StandardLevel';
import { expect, test } from 'vitest';

test('StandardLevel should create a 5x5 grid', () => {
  const level = new StandardLevel();

  const grid = level.setupLevel();
  
  expect(grid).toHaveLength(5);

  grid.forEach(row => {
    expect(row).toHaveLength(5);
  });
})

test('StandardLevel should have some lights on', () => {
    const level = new StandardLevel();
  
    const grid = level.setupLevel();
    
    let lightsOn = 0;
    grid.forEach(row => {
      lightsOn += row.filter(light => !!light).length;
    });
    expect(lightsOn).toBeGreaterThan(0);
})