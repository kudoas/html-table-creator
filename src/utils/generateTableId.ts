export const generateTableId = (table: string[][]): number[][] => {
  let keys = [];
  for (const tableItem of table) {
    let _ = [];
    for (let i in tableItem) {
      _.push(Number(i));
    }
    keys.push(_);
  }
  return keys;
};
