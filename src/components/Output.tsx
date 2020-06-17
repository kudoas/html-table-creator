import React, { useContext, useState } from 'react';
import { html } from 'common-tags';
import styled from '@emotion/styled';
import CopyToClipboard from 'react-copy-to-clipboard';

import { Context } from './Context';

// Referred to issue#160 https://github.com/zspecza/common-tags/issues/160
const renderTable = (arg: any) => {
  // prettier-ignore
  return html`
    <table>
      ${arg.map(columnsAndRows)}
    </table>
  `;
};

const columnsAndRows = (arg: []) => {
  // prettier-ignore
  return html`
    <tr>${arg.map((a:string)=> `<td>${a}</td>`)}</tr>
  `;
};

const renderHtml: React.FCX = ({ className }) => {
  const [isCopied, setIsCopied] = useState(false);
  const context: any = useContext(Context);

  let rowKeys = [];
  for (let i = 0; i < context.tableItems.length; i++) {
    rowKeys.push(i);
  }

  return (
    <>
      <pre className={className}>{renderTable(context.tableItems)}</pre>
      <CopyToClipboard text={renderTable(context.tableItems)} onCopy={() => setIsCopied(true)}>
        <button>Copy to Clipboard</button>
      </CopyToClipboard>
      {isCopied ? <div>Copied!</div> : null}
    </>
  );
};

const StyledRenderHtml = styled(renderHtml)`
  padding: 16px;
  border: none;
  border-radius: 2px;
  background-color: #fff;
  height: 300px;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.25);

  /* os: dark mode or not */
  /* will storage dark mode or not to localStorage */
  @media (prefers-color-scheme: dark) {
    background-color: dimgray;
    color: #fff;
  }
`;

export default StyledRenderHtml;
