import React, { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import styled from '@emotion/styled';

import { renderTable } from '../../../utils/renderTable';

type Props = {
  state: string[][];
  isCopied?: boolean;
  onCopy?: () => void;
};

const Component: React.FCX<Props> = ({ className, state, isCopied, onCopy }) => (
  <div className={className}>
    <pre>{renderTable(state)}</pre>
    <div>
      <CopyToClipboard text={renderTable(state)} onCopy={onCopy}>
        <button>{isCopied ? 'Copied' : 'Copy to Clipboard'}</button>
      </CopyToClipboard>
    </div>
  </div>
);

const StyledComponent = styled(Component)`
  height: 500px;
  > h3 {
    text-align: center;
  }
  > pre {
    background-color: #e0e5ec;
    padding: 10px;
    margin: 10px 30px;
    box-shadow: 2px 2px 10px #ffffff, -2px -2px 10px #a3b1c6;
    border-radius: 5px;
    height: 400px;
    user-select: all;
  }
  > div {
    text-align: center;
    margin: 10px 30px;
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
`;

const Container: React.FCX<Props> = ({ state }) => {
  const [isCopied, setIsCopied] = useState(false);

  return <StyledComponent state={state} isCopied={isCopied} onCopy={() => setIsCopied(true)} />;
};

export default Container;
