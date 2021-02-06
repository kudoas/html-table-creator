import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';

import TableContainer from './useNewTable';

describe('useNewTable', () => {
  it('initial value', () => {
    const { result } = renderHook(() => TableContainer.useContainer());
    expect(result.current.state).toStrictEqual([['']]);
  });

  it('add row', () => {
    const { result } = renderHook(() => TableContainer.useContainer());
    act(() => {
      result.current.addRow();
    });
    expect(result.current.state).toStrictEqual([[''], ['']]);
  });

  it('remove row', () => {
    const { result } = renderHook(() => TableContainer.useContainer());
    act(() => {
      result.current.addRow();
      result.current.removeRow();
      expect(result.current.state).toStrictEqual([['']]);
    });
  });

  it('add column', () => {
    const { result } = renderHook(() => TableContainer.useContainer());
    act(() => {
      result.current.addColumn();
    });
    expect(result.current.state).toStrictEqual([['', '']]);
  });

  it('remove column', () => {
    const { result } = renderHook(() => TableContainer.useContainer());
    act(() => {
      result.current.addColumn();
      result.current.removeColumn();
    });
    expect(result.current.state).toStrictEqual([['']]);
  });

  it('reset table', () => {
    const { result } = renderHook(() => TableContainer.useContainer());
    act(() => {
      result.current.addColumn();
      result.current.addRow();
      result.current.reset();
    });
    expect(result.current.state).toStrictEqual([['']]);
  });

  it('onChange', () => {
    const { result } = renderHook(() => TableContainer.useContainer());
    act(() => {
      result.current.addColumn();
      result.current.addRow();
    });
    const { container } = render(
      <input type="text" onChange={(e) => result.current.onChange(e, 1, 1)} />,
    );
    const input = container.querySelector('input');
    act(() => {
      fireEvent.change(input!, { target: { value: 'cell 2-2' } });
    });
    expect(result.current.state).toStrictEqual([
      ['', ''],
      ['', 'cell 2-2'],
    ]);
  });
});
