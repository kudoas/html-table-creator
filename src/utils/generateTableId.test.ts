import { generateTableId } from './generateTableId';

test('generate keys', () => {
  const output = generateTableId([
    ['1-1', '1-2'],
    ['2-1', '2-2'],
  ]);
  const expected: number[][] = [
    [0, 1],
    [0, 1],
  ];
  expect(output).toEqual(expected);
});
