import sortHeroes from '../../sortHeroes';

test('should sort heroes by health descending', () => {
  const heroes = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  const sorted = sortHeroes(heroes);

  expect(sorted).toEqual([
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ]);
});

test('should not mutate original array', () => {
  const heroes = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
  ];

  const sorted = sortHeroes(heroes);

  expect(sorted).not.toBe(heroes);
});