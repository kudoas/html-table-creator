import React from 'react';
import styled from '@emotion/styled';

import { type InsertPosition } from '../../../hooks/useProvideTable';

type Props = {
  keys?: number[];
  state: string[][];
  tableKeys: number[][];
  onChange: (e: React.FormEvent<HTMLInputElement>, column: number, row: number) => void;
  addColumnAt: (columnIndex: number, position: InsertPosition) => void;
  removeColumnAt: (columnIndex: number) => void;
  addRowAt: (rowIndex: number, position: InsertPosition) => void;
  removeRowAt: (rowIndex: number) => void;
};

const Component: React.FCX<Props> = ({
  className,
  keys,
  tableKeys,
  onChange,
  state,
  addColumnAt,
  removeColumnAt,
  addRowAt,
  removeRowAt,
}) => {
  const rowIndexes = keys ?? [];
  const columnIndexes = tableKeys[0] ?? [];
  const dataGridTemplate = `36px repeat(${columnIndexes.length}, var(--cell-width))`;

  return (
    <div className={className}>
      <div className="table-editor">
        <div className="column-controls" style={{ gridTemplateColumns: dataGridTemplate }}>
          <div />
          {columnIndexes.map((columnIndex) => (
            <div className="column-control-cell" key={columnIndex}>
              <button
                type="button"
                className="operation-button add-button column-add-button"
                aria-label={`Add column before ${columnIndex + 1}`}
                onClick={() => addColumnAt(columnIndex, 'before')}
              >
                +
              </button>
              <button
                type="button"
                className="operation-button remove-button"
                aria-label={`Remove column ${columnIndex + 1}`}
                disabled={state[0].length <= 1}
                onClick={() => removeColumnAt(columnIndex)}
              >
                -
              </button>
            </div>
          ))}
          <button
            type="button"
            className="operation-button add-button column-add-button column-add-button-after"
            aria-label={`Add column after ${columnIndexes.length}`}
            onClick={() => addColumnAt(columnIndexes.length - 1, 'after')}
          >
            +
          </button>
        </div>
        <div
          className="column-guides"
          aria-hidden="true"
          style={{ gridTemplateColumns: dataGridTemplate }}
        >
          <div />
          {columnIndexes.map((columnIndex) => (
            <div className="column-guide-cell" key={columnIndex} />
          ))}
        </div>

        {rowIndexes.map((rowIndex) => (
          <React.Fragment key={rowIndex}>
            <div className="row-insert-line" style={{ gridTemplateColumns: dataGridTemplate }}>
              <button
                type="button"
                className="operation-button add-button"
                aria-label={`Add row before ${rowIndex + 1}`}
                onClick={() => addRowAt(rowIndex, 'before')}
              >
                +
              </button>
              <div className="row-insert-guide" />
            </div>
            <div className="table-row" style={{ gridTemplateColumns: dataGridTemplate }}>
              <button
                type="button"
                className="operation-button remove-button"
                aria-label={`Remove row ${rowIndex + 1}`}
                disabled={state.length <= 1}
                onClick={() => removeRowAt(rowIndex)}
              >
                -
              </button>
              {columnIndexes.map((columnIndex) => (
                <input
                  key={columnIndex}
                  type="text"
                  value={state[rowIndex][columnIndex]}
                  onChange={(e) => onChange(e, rowIndex, columnIndex)}
                />
              ))}
            </div>
          </React.Fragment>
        ))}

        <div className="row-insert-line" style={{ gridTemplateColumns: dataGridTemplate }}>
          <button
            type="button"
            className="operation-button add-button"
            aria-label={`Add row after ${rowIndexes.length}`}
            onClick={() => addRowAt(rowIndexes.length - 1, 'after')}
          >
            +
          </button>
          <div className="row-insert-guide" />
        </div>
      </div>
    </div>
  );
};

const StyledComponent = styled(Component)`
  --cell-width: 170px;

  overflow-x: auto;
  padding: 10px;
  text-align: center;

  .table-editor {
    display: inline-block;
    min-width: max-content;
    position: relative;
  }

  .column-controls,
  .column-guides,
  .table-row,
  .row-insert-line {
    align-items: center;
    display: grid;
    gap: 6px;
    justify-content: center;
  }

  .column-controls {
    margin-bottom: 2px;
    position: relative;
    z-index: 2;
  }

  .column-control-cell {
    align-items: center;
    display: flex;
    justify-content: center;
    position: relative;
  }

  .column-guides {
    bottom: 0;
    left: 0;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 26px;
    z-index: 0;
  }

  .column-guide-cell {
    height: 100%;
    position: relative;
  }

  .column-guide-cell::before {
    border-left: 1px dashed rgba(0, 0, 0, 0.12);
    bottom: 0;
    content: '';
    left: -3px;
    position: absolute;
    top: 0;
  }

  .column-guide-cell:last-child::after {
    border-left: 1px dashed rgba(0, 0, 0, 0.12);
    bottom: 0;
    content: '';
    position: absolute;
    right: -3px;
    top: 0;
  }

  .row-insert-line {
    min-height: 24px;
    position: relative;
    z-index: 1;
  }

  .row-insert-guide {
    border-top: 1px dashed rgba(0, 0, 0, 0.12);
    grid-column: 2 / -1;
    height: 1px;
  }

  .table-row {
    margin: 2px 0;
    position: relative;
    z-index: 1;
  }

  input {
    background-color: #e0e5ec;
    border: 0;
    border-radius: 5px;
    box-shadow: 2px 2px 10px #ffffff, -2px -2px 10px #a3b1c6;
    box-sizing: border-box;
    padding: 8px;
    width: var(--cell-width);
  }

  .operation-button {
    align-items: center;
    background-color: #e0e5ec;
    border: 0;
    border-radius: 50%;
    box-shadow: 1px 1px 5px #a3b1c6, -1px -1px 5px #ffffff;
    color: black;
    cursor: pointer;
    display: inline-flex;
    font-weight: bold;
    height: 24px;
    justify-content: center;
    line-height: 1;
    margin: 0 auto;
    width: 24px;
  }

  .operation-button:hover {
    color: white;
  }

  .operation-button:disabled {
    background: #ccc;
    border: #ccc;
    box-shadow: 1px 1px 5px #ffffff, -1px -1px 5px #a3b1c6;
    color: #ffffff;
    cursor: not-allowed;
  }

  .add-button {
    font-size: 18px;
  }

  .remove-button {
    font-size: 20px;
  }

  .column-add-button {
    left: -15px;
    position: absolute;
  }

  .column-add-button-after {
    left: auto;
    right: -15px;
  }
`;

const Container: React.FCX<Props> = ({
  tableKeys,
  onChange,
  state,
  addColumnAt,
  removeColumnAt,
  addRowAt,
  removeRowAt,
}) => {
  let keys = [];
  for (let i in tableKeys) {
    keys.push(Number(i));
  }

  return (
    <StyledComponent
      keys={keys}
      tableKeys={tableKeys}
      onChange={onChange}
      state={state}
      addColumnAt={addColumnAt}
      removeColumnAt={removeColumnAt}
      addRowAt={addRowAt}
      removeRowAt={removeRowAt}
    />
  );
};

export default Container;
