/**
 * @vitest-environment jsdom
 */

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';

import { TABLE_STORAGE_KEY, useProvideTable } from './useProvideTable';

describe('useNewTable', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it('initial value', () => {
    const { result } = renderHook(() => useProvideTable());
    expect(result.current.state).toStrictEqual([['']]);
  });

  it('restores table from localStorage', () => {
    window.localStorage.setItem(
      TABLE_STORAGE_KEY,
      JSON.stringify([
        ['Name', 'Age'],
        ['Ada', '36'],
      ]),
    );

    const { result } = renderHook(() => useProvideTable());

    expect(result.current.state).toStrictEqual([
      ['Name', 'Age'],
      ['Ada', '36'],
    ]);
  });

  it('ignores invalid localStorage table state', () => {
    window.localStorage.setItem(TABLE_STORAGE_KEY, JSON.stringify([['Name'], [123]]));

    const { result } = renderHook(() => useProvideTable());

    expect(result.current.state).toStrictEqual([['']]);
  });

  it('ignores empty localStorage table state', () => {
    window.localStorage.setItem(TABLE_STORAGE_KEY, JSON.stringify([]));

    const { result } = renderHook(() => useProvideTable());

    expect(result.current.state).toStrictEqual([['']]);
  });

  it('ignores empty row localStorage table state', () => {
    window.localStorage.setItem(TABLE_STORAGE_KEY, JSON.stringify([[]]));

    const { result } = renderHook(() => useProvideTable());

    expect(result.current.state).toStrictEqual([['']]);
  });

  it('ignores broken localStorage table state', () => {
    window.localStorage.setItem(TABLE_STORAGE_KEY, '{');

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

  it('stores table updates in localStorage', () => {
    const { result } = renderHook(() => useProvideTable());

    act(() => {
      result.current.actions.addColumn();
      result.current.actions.addRow();
    });

    expect(JSON.parse(window.localStorage.getItem(TABLE_STORAGE_KEY)!)).toStrictEqual([
      ['', ''],
      ['', ''],
    ]);
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
