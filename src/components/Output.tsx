import React, { useContext, useState } from 'react';
import { html } from 'common-tags';
import styled from '@emotion/styled';
import CopyToClipboard from 'react-copy-to-clipboard';

import { Context } from './Context';

// これだと上手くいかない！
// const renderTable = (tableItem: string) => {
//   const context: any = useContext(Context);
//   // prettier-ignore
//   // ${arr.map(a => `<td>${tableItem}</td>`)}
//   // mapでネストすると<td></td>の間に,が挿入されてしまう！
//   return html`
//     <table>
//       ${context.tableItems.map((columns:string[]) =>
//       `<tr>
//         ${columns.join('<td></td>')}
//       </tr>`)
//       }
//     </table>
//     <tr>
//       ${context.tableItems[0].map((item:string) => `<td>${item}</td>`)}
//     </tr>
//   `;
// };

// Referred to issue#160 https://github.com/zspecza/common-tags/issues/160
const renderTable = (arg: any) => {
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

// これも上手くいかない！
// mapの階層を1つ減らす
// const renderRows = (num: number) => {
//   const context: any = useContext(Context);

//   // prettier-ignore
//   return html`
//     <tr>
//       ${context.tableItems[num].map((item:string) => `<td>${item}</td>`)}
//     </tr>
//   `;
// };

// const Hoge = (num: number) => {
//   // prettier-ignore
//   return html`
//     ${renderRows(num)}
//   `;
// };

const renderHtml: React.FCX = ({ className }) => {
  const [isCopied, setIsCopied] = useState(false);
  const context: any = useContext(Context);

  let rowKeys = [];
  for (let i = 0; i < context.tableItems.length; i++) {
    rowKeys.push(i);
  }

  // const table =
  //   // prettier-ignore
  //   <div className={className}>
  //     {rowKeys.map((k: number) => (
  //       <pre style={{ margin: '0px', marginLeft: '10px' }} key={k}>{Hoge(k)}</pre>
  //     ))}
  //   </div>;

  return (
    <React.Fragment>
      <pre className={className}>{renderTable(context.tableItems)}</pre>
      <CopyToClipboard text={renderTable(context.tableItems)} onCopy={() => setIsCopied(true)}>
        <button>Copy to Clipboard</button>
      </CopyToClipboard>
      {isCopied ? <div>Copied!</div> : null}
    </React.Fragment>
  );
};

const StyledRenderHtml = styled(renderHtml)`
  padding: 16px;
  border: none;
  border-radius: 2px;
  background-color: #fff;
  height: 300px;
  font: inherit;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.25);

  /* os: dark mode or not */
  /* will storage dark mode or not to localStorage */
  @media (prefers-color-scheme: dark) {
    background-color: dimgray;
    color: #fff;
  }
`;

export default StyledRenderHtml;
