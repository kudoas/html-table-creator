import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { TableProvider } from '../../../context/TableContext';
import Output from './Output';

vi.mock('react-copy-to-clipboard', () => ({
  default: ({
    children,
    onCopy,
  }: {
    children: React.ReactElement<{ onClick?: () => void }>;
    onCopy?: () => void;
  }) => React.cloneElement(children, { onClick: onCopy }),
}));

describe('Output', () => {
  it('renders table HTML and copy state', () => {
    render(
      <TableProvider>
        <Output />
      </TableProvider>,
    );

    expect(screen.getByText(/<table>/).textContent).toContain('<td></td>');

    fireEvent.click(screen.getByRole('button', { name: 'Copy to Clipboard' }));
    expect(screen.getByRole('button', { name: 'Copied' })).toBeTruthy();
  });
});
