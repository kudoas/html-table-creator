# 行・列を直接指定して追加・削除するUI設計

## 背景

現在の行列操作は、追加・削除対象が一番右の列または一番下の行に固定されていた。

これを、テーブル上で対象位置を直接選び、任意の行・列を追加・削除できるUIに変更する。

## 方針

select で行番号・列番号を選ぶUIではなく、テーブル本体の上と左に操作ボタンを配置する。

- 列操作はテーブル上部に置く
- 行操作はテーブル左側に置く
- `+` は行・列の挿入
- `-` は対象行・対象列の削除

ユーザーが操作したい位置の近くにボタンを置くことで、番号指定より直感的にする。

## 操作API

`useProvideTable` に以下の action を追加する。

```ts
type InsertPosition = 'before' | 'after';

addRowAt(rowIndex: number, position: InsertPosition): void;
removeRowAt(rowIndex: number): void;

addColumnAt(columnIndex: number, position: InsertPosition): void;
removeColumnAt(columnIndex: number): void;
```

既存の末尾操作APIは互換性のため残す。

- `addRow`
- `removeRow`
- `addColumn`
- `removeColumn`

## UI設計

### 列操作

テーブル上部に、列の挿入・削除ボタンを表示する。

```text
      +      -      +      -      +
           [ A ]         [ B ]
```

- `+` は列と列の間、または端に配置する
- `-` は対象列の上に配置する
- `Add column before 1`
- `Add column after N`
- `Remove column N`

### 行操作

テーブル左側に、行の挿入・削除ボタンを表示する。

```text
  +
  -   [ A ] [ B ]
  +
  -   [ C ] [ D ]
  +
```

- `+` は行と行の間、または端に配置する
- `-` は対象行の左に配置する
- `Add row before 1`
- `Add row after N`
- `Remove row N`

## disabled 条件

削除ボタンは以下の場合に disabled にする。

- 行数が `1` のとき、行削除ボタンを disabled
- 列数が `1` のとき、列削除ボタンを disabled

## 実装対象

### `src/hooks/useProvideTable.tsx`

指定行・指定列に対する追加・削除 action を追加する。

配列更新は浅いコピーの直接変更ではなく、行配列もコピーして immutable に更新する。

### `src/context/TableContext.tsx`

新しい action を `TableContextProps` と provider value に追加する。

### `src/components/ControlPanel/ControlPanel.tsx`

`useTable()` から新しい action を受け取り、`TableForm` に渡す。

### `src/components/ControlPanel/TableForm/TableForm.tsx`

テーブル入力欄と同じ場所に、上部の列操作ボタンと左側の行操作ボタンを描画する。

### `src/components/ControlPanel/ControlButtons/ControlButtons.tsx`

全体操作だけを残す。

- `Delete All Items`
- `Reset Table`

## テスト方針

### `src/hooks/useProvideTable.test.tsx`

- 指定行の前後に行を追加できる
- 指定行を削除できる
- 1行だけのとき行削除しても壊れない
- 指定列の前後に列を追加できる
- 指定列を削除できる
- 1列だけのとき列削除しても壊れない

### `src/components/ControlPanel/ControlPanel.test.tsx`

- 左側のボタンから行を追加・削除できる
- 上部のボタンから列を追加・削除できる
- 1行・1列だけの場合、削除ボタンが disabled になる
