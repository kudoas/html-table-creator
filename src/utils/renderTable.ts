import { html } from 'common-tags';

// Referred to issue: #160 https://github.com/zspecza/common-tags/issues/160
export const renderTable = (arr2d: string[][]) => {
  // prettier-ignore
  return html`
    <table>
      ${arr2d.map(columnsAndRows)}
    </table>
  `;
};

export const columnsAndRows = (arr: []) => {
  // prettier-ignore
  return html`
    <tr>${arr.map((a:string)=> `<td>${a}</td>`)}</tr>
  `;
};
