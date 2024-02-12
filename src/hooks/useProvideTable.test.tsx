/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';

import { useProvideTable } from './useProvideTable';

describe('useNewTable', () => {
  it('initial value', () => {
    const { result } = renderHook(() => useProvideTable());
    expect(result.current.state).toStrictEqual([['']]);
  });

  it('add row', () => {
    const { result } = renderHook(() => useProvideTable());
    act(() => {
      result.current.actions.addRow();
    });
    expect(result.current.state).toStrictEqual([[''], ['']]);
  });

  it('remove row', () => {
    const { result } = renderHook(() => useProvideTable());
    act(() => {
      result.current.actions.addRow();
      result.current.actions.removeRow();
      expect(result.current.state).toStrictEqual([['']]);
    });
  });

  it('add column', () => {
    const { result } = renderHook(() => useProvideTable());
    act(() => {
      result.current.actions.addColumn();
    });
    expect(result.current.state).toStrictEqual([['', '']]);
  });

  it('remove column', () => {
    const { result } = renderHook(() => useProvideTable());
    act(() => {
      result.current.actions.addColumn();
      result.current.actions.removeColumn();
    });
    expect(result.current.state).toStrictEqual([['']]);
  });

  it('reset table', () => {
    const { result } = renderHook(() => useProvideTable());
    act(() => {
      result.current.actions.addColumn();
      result.current.actions.addRow();
      result.current.actions.reset();
    });
    expect(result.current.state).toStrictEqual([['']]);
  });

  it('onChange', () => {
    const { result } = renderHook(() => useProvideTable());
    act(() => {
      result.current.actions.addColumn();
      result.current.actions.addRow();
    });
    const { container } = render(
      <input type="text" onChange={(e) => result.current.actions.onChange(e, 1, 1)} />,
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
