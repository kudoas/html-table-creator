import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';

import useNewTable from './useNewTable';

describe('useNewTable', () => {
  it('initial value', () => {
    const { result } = renderHook(() => useNewTable());
    expect(result.current.state).toStrictEqual([['']]);
  });

  it('add and remove row', () => {
    const { result } = renderHook(() => useNewTable());
    act(() => {
      result.current.addRow();
    });
    expect(result.current.state).toStrictEqual([[''], ['']]);

    act(() => {
      result.current.removeRow();
    });
    expect(result.current.state).toStrictEqual([['']]);
  });

  it('add and remove column', () => {
    const { result } = renderHook(() => useNewTable());
    act(() => {
      result.current.addColumn();
    });
    expect(result.current.state).toStrictEqual([['', '']]);

    act(() => {
      result.current.removeColumn();
    });
    expect(result.current.state).toStrictEqual([['']]);
  });

  it('reset table', () => {
    const { result } = renderHook(() => useNewTable());
    act(() => {
      result.current.addColumn();
      result.current.addRow();
      result.current.reset();
    });
    expect(result.current.state).toStrictEqual([['']]);
  });
});
