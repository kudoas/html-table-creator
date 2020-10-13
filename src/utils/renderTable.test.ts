import { renderTable } from './renderTable';

// prettier-ignore
test('create <table/> tag', () => {
  const output = renderTable([['1-1', '1-2'], ['2-1', '2-2']]);
  expect(output).toEqual(
`<table>
  <tr><td>1-1</td> <td>1-2</td></tr>
  <tr><td>2-1</td> <td>2-2</td></tr>
</table>`);
});
