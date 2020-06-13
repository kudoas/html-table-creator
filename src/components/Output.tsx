import React, { useContext } from 'react';
import { html } from 'common-tags';
import styled from '@emotion/styled';

import { Context } from './Context';

const renderTable = (tableItem: string) => {
  // prettier-ignore
  return html`
    <table>
      <tr>
        <td>${tableItem}</td>
      </tr>
    </table>
  `;
};

const renderHtml: React.FCX = ({ className }) => {
  const context: any = useContext(Context);
  return <pre className={className}>{renderTable(context.text)}</pre>;
};

const StyledRenderHtml = styled(renderHtml)`
  padding: 16px;
  border: none;
  border-radius: 2px;
  background-color: #fff;
  height: 300px;
  font: inherit;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.25);
`;

export default StyledRenderHtml;
