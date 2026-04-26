import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { TableProvider } from '../../context/TableContext';
import ControlPanel from './ControlPanel';

describe('ControlPanel', () => {
  it('renders controls and edits table cells', () => {
    render(
      <TableProvider>
        <ControlPanel />
      </TableProvider>,
    );

    const removeColumn = screen.getByRole('button', { name: /Remove Column/ }) as HTMLButtonElement;
    const removeRow = screen.getByRole('button', { name: /Remove Row/ }) as HTMLButtonElement;
    expect(removeColumn.disabled).toBe(true);
    expect(removeRow.disabled).toBe(true);

    fireEvent.click(screen.getByRole('button', { name: /Add Column/ }));
    fireEvent.click(screen.getByRole('button', { name: /Add Row/ }));

    const inputs = screen.getAllByRole('textbox') as HTMLInputElement[];
    expect(inputs).toHaveLength(4);
    fireEvent.change(inputs[3], { target: { value: 'bottom right' } });
    expect(inputs[3].value).toBe('bottom right');

    expect(removeColumn.disabled).toBe(false);
    expect(removeRow.disabled).toBe(false);

    fireEvent.click(screen.getByRole('button', { name: /Delete All Items/ }));
    expect((screen.getAllByRole('textbox') as HTMLInputElement[])[3].value).toBe('');

    fireEvent.click(removeColumn);
    fireEvent.click(removeRow);
    expect(screen.getAllByRole('textbox')).toHaveLength(1);

    fireEvent.click(screen.getByRole('button', { name: /Add Column/ }));
    fireEvent.click(screen.getByRole('button', { name: /Reset Table/ }));
    expect(screen.getAllByRole('textbox')).toHaveLength(1);
  });
});
