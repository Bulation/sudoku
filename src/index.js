module.exports = function solveSudoku(matrix) {
    let squares = [];
    for (let i = 0; i < 3; i++) {
      squares.push([]);
      let s = 0;
      for (let j = 0; j < 3; j++) {
        squares[i].push([]);
        for (let l = 0; l < 3; l++) {
          for (let k = i * 3; k < i * 3 + 3; k++) {
            squares[i][j].push(matrix[k][s]);
          }
          s++;
        }
      }
    }
    for (let i = 0; i < matrix.length; i++) {
      let numbers = [];
      for (let j = 0; j < matrix[i].length; j++) {
        numbers.push([]);
        if (matrix[i][j] == 0) {
          let column = [];
          for (let k = 0; k < 9; k++) {
            if (matrix[k][j] != 0) {
              column.push(matrix[k][j]);
            }
          }
          for (let l = 1; l <= 9; l++) {
            if (
              !column.includes(l) &&
              !matrix[i].includes(l) &&
              !squares[Math.floor(i / 3)][Math.floor(j / 3)].includes(l)
            ) {
              numbers[j].push(l);
            }
          }
          if (numbers[j].length == 1) {
            matrix[i][j] = numbers[j][0];
          }
        }
      }
      for (let k = 0; k < numbers.length; k++) {
        for (let l = 0; l < numbers[k].length; l++) {
          let s = 0;
          for (let arr of numbers) {
            if (arr.includes(numbers[k][l])) {
              s++;
            }
          }
          if (s == 1 && numbers[k].length > 1) {
            matrix[i][k] = numbers[k][l];
          }
        }
      }
    }

    for (let i = 0; i < matrix.length; i++) {
      let numbers = [];
      for (let j = 0; j < matrix[i].length; j++) {
        numbers.push([]);
        if (matrix[j][i] == 0) {
          let column = [];
          for (let k = 0; k < 9; k++) {
            if (matrix[k][i] != 0) {
              column.push(matrix[k][i]);
            }
          }
          for (let l = 1; l <= 9; l++) {
            if (
              !column.includes(l) &&
              !matrix[j].includes(l) &&
              !squares[Math.floor(j / 3)][Math.floor(i / 3)].includes(l)
            ) {
              numbers[j].push(l);
            }
          }
          if (numbers[j].length == 1) {
            matrix[j][i] = numbers[j][0];
          }
        }
      }
      for (let k = 0; k < numbers.length; k++) {
        for (let l = 0; l < numbers[k].length; l++) {
          let s = 0;
          for (let arr of numbers) {
            if (arr.includes(numbers[k][l])) {
              s++;
            }
          }
          if (s == 1 && numbers[k].length > 1) {
            matrix[k][i] = numbers[k][l];
          }
        }
      }
    }

    for (let arr of matrix) {
      if (arr.includes(0)) {
        return solveSudoku(matrix);
      }
    }
    return matrix;
}
