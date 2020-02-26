//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(matrix) {
    this.matrixColumns = [];
    this.matrixRows = [];

    let matrixRows = matrix.split('\n');
    let matrixColumns = [];

    let index = 0;
    let subindex = 0;
    let highestColCount = 0;

    for (index = 0; index < matrixRows.length; index++) {
      matrixRows[index] = matrixRows[index].split(' ');
      if(highestColCount < matrixRows[index].length){
        highestColCount = matrixRows[index].length;
      }
      for (subindex = 0; subindex < matrixRows[index].length; subindex++) {
        matrixRows[index][subindex] = parseInt(matrixRows[index][subindex]);
      }
    }

    for (index = 0; index < highestColCount; index++) {
      let col = [];
      for (subindex = 0; subindex < matrixRows.length; subindex++) {
        col.push(matrixRows[subindex][index]);
      }
      matrixColumns.push(col);
    }

    this.matrixColumns = matrixColumns;
    this.matrixRows = matrixRows;
    return;
  }

  get rows() {
    return this.matrixRows;
  }

  get columns() {
    return this.matrixColumns;
  }
}
