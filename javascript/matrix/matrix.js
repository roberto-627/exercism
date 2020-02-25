//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(matrix) {
    this.matrixColumns = [];
    this.matrixRows = [];

    let stringColumns = matrix.split('\n');

    stringColumns.forEach(string => {
      this.matrixColumns.push(string.split(' '));
    });

    console.log(this.matrixColumns);

    for (let index = 0; index < this.matrixColumns.length; index++) {
      let row = [];
      this.matrixColumns.forEach(column => { 
        row.push(parseInt(column[index]));
      });
      this.matrixRows.push(row);
    }

    console.log(this.matrixRows);

    return;
  }

  get rows() {
    return this.matrixRows;
  }

  get columns() {
    return this.matrixColumns;
  }
}
