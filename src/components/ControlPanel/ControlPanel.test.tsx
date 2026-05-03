import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { TableProvider } from '../../context/TableContext';
import ControlPanel from './ControlPanel';

describe('ControlPanel', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it('renders controls and edits table cells', () => {
    render(
      <TableProvider>
        <ControlPanel />
      </TableProvider>,
    );

    const removeColumn = screen.getByRole('button', {
      name: 'Remove column 1',
    }) as HTMLButtonElement;
    const removeRow = screen.getByRole('button', { name: 'Remove row 1' }) as HTMLButtonElement;
    expect(removeColumn.disabled).toBe(true);
    expect(removeRow.disabled).toBe(true);

    fireEvent.click(screen.getByRole('button', { name: 'Add column after 1' }));
    fireEvent.click(screen.getByRole('button', { name: 'Add row after 1' }));

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

    fireEvent.click(screen.getByRole('button', { name: 'Add column after 1' }));
    fireEvent.click(screen.getByRole('button', { name: /Reset Table/ }));
    expect(screen.getAllByRole('textbox')).toHaveLength(1);
  });

  it('adds and removes a row from the left controls', () => {
    render(
      <TableProvider>
        <ControlPanel />
      </TableProvider>,
    );

    fireEvent.click(screen.getByRole('button', { name: 'Add row after 1' }));

    let inputs = screen.getAllByRole('textbox') as HTMLInputElement[];
    fireEvent.change(inputs[0], { target: { value: 'row 1' } });
    fireEvent.change(inputs[1], { target: { value: 'row 2' } });

    fireEvent.click(screen.getByRole('button', { name: 'Add row before 2' }));

    inputs = screen.getAllByRole('textbox') as HTMLInputElement[];
    expect(inputs.map((input) => input.value)).toStrictEqual(['row 1', '', 'row 2']);

    fireEvent.click(screen.getByRole('button', { name: 'Remove row 2' }));

    inputs = screen.getAllByRole('textbox') as HTMLInputElement[];
    expect(inputs.map((input) => input.value)).toStrictEqual(['row 1', 'row 2']);
  });

  it('adds and removes a column from the top controls', () => {
    render(
      <TableProvider>
        <ControlPanel />
      </TableProvider>,
    );

    fireEvent.click(screen.getByRole('button', { name: 'Add column after 1' }));

    let inputs = screen.getAllByRole('textbox') as HTMLInputElement[];
    fireEvent.change(inputs[0], { target: { value: 'column 1' } });
    fireEvent.change(inputs[1], { target: { value: 'column 2' } });

    fireEvent.click(screen.getByRole('button', { name: 'Add column before 2' }));

    inputs = screen.getAllByRole('textbox') as HTMLInputElement[];
    expect(inputs.map((input) => input.value)).toStrictEqual(['column 1', '', 'column 2']);

    fireEvent.click(screen.getByRole('button', { name: 'Remove column 2' }));

    inputs = screen.getAllByRole('textbox') as HTMLInputElement[];
    expect(inputs.map((input) => input.value)).toStrictEqual(['column 1', 'column 2']);
  });

  it('disables row and column remove buttons when there is one item', () => {
    render(
      <TableProvider>
        <ControlPanel />
      </TableProvider>,
    );

    const removeRow = screen.getByRole('button', { name: 'Remove row 1' }) as HTMLButtonElement;
    const removeColumn = screen.getByRole('button', {
      name: 'Remove column 1',
    }) as HTMLButtonElement;

    expect(removeRow.disabled).toBe(true);
    expect(removeColumn.disabled).toBe(true);

    fireEvent.click(screen.getByRole('button', { name: 'Add row after 1' }));
    expect(removeRow.disabled).toBe(false);

    fireEvent.click(screen.getByRole('button', { name: 'Add column after 1' }));
    expect(removeColumn.disabled).toBe(false);
  });
});
