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
    <div className={className}>
      <pre>{renderTable(context.tableItems)}</pre>
      <div>
        <CopyToClipboard text={renderTable(context.tableItems)} onCopy={() => setIsCopied(true)}>
          <button>{isCopied ? 'Copied' : 'Copy to Clipboard'}</button>
        </CopyToClipboard>
      </div>
    </div>
  );
};

const StyledRenderHtml = styled(renderHtml)`
  pre {
    background-color: #e0e5ec;
    padding: 16px;
    box-shadow: 2px 2px 10px #ffffff, -2px -2px 10px #a3b1c6;
    border-radius: 5px;
    height: 400px;
  }
  div {
    text-align: center;
    margin: 10px 10px;
  }
  button {
    padding: 10px;
    background-color: #e0e5ec;
    box-shadow: 1px 1px 5px #a3b1c6, -1px -1px 5px #ffffff;
    margin: 10px;
    border-radius: 4px;
    color: black;
    &:hover {
      color: white;
    }
  }

  /* os: dark mode or not */
  /* will storage dark mode or not to localStorage */
  /* @media (prefers-color-scheme: dark) {
    background-color: dimgray;
    color: #fff;
  } */
`;

export default StyledRenderHtml;
