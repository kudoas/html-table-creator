import React from 'react';
import { html } from 'common-tags';

// Referred to issue#160 https://github.com/zspecza/common-tags/issues/160
const tableItems = [
  ['11', '12', '13'],
  ['21', '22', '23'],
  ['31', '32', '33'],
];

const Table = (arg: any) => {
  // prettier-ignore
  return html`
    <table>
      ${arg.map(Tr)}
    </table>
  `;
};

const Tr = (arg: []) => {
  // prettier-ignore
  return html`
  <tr>${arg.map(Td)}</tr>`;
};

const Td = (arg: any) => {
  // prettier-ignore
  return html`
    <td>${arg}</td>
  `
};

const renderNestedHtml = (items: string) => {
  return html`
    <li>
      <div>${items}</div>
    </li>
  `;
};

const Html = () => {
  const Fluits = ['banana', 'potato', 'kiwi'];
  return html`
    <ul>
      ${Fluits.map(renderNestedHtml)}
    </ul>
  `;
};

const RenderHtml = () => {
  return (
    <div>
      <pre>{Html()}</pre>
      <pre>{Table(tableItems)}</pre>
    </div>
  );
};

export default RenderHtml;
