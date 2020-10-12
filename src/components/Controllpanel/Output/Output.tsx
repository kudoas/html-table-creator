import React, { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import styled from '@emotion/styled';

import { renderTable } from '../../../utils/renderTable';

type Props = {
  state: string[][];
};

const Component: React.FCX<Props> = ({ className, state }) => {
  const [isCopied, setIsCopied] = useState(false);

  let rowKeys = [];
  for (let i in state) {
    rowKeys.push(Number(i));
  }

  return (
    <div className={className}>
      <pre>{renderTable(state)}</pre>
      <div>
        <CopyToClipboard text={renderTable(state)} onCopy={() => setIsCopied(true)}>
          <button>{isCopied ? 'Copied' : 'Copy to Clipboard'}</button>
        </CopyToClipboard>
      </div>
    </div>
  );
};

const StyledComponent = styled(Component)`
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

export default StyledComponent;
