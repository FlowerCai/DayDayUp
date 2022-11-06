var setZeroes = function (matrix) {
  const row = matrix.length
  const col = matrix[0].length
  const signRow = new Array(row).fill(false)
  const signCol = new Array(col).fill(false)
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (matrix[i][j] == 0) {
        signRow[i] = true
        signCol[j] = true
      }
    }
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (signRow[i] || signCol[j]) {
        matrix[i][j] = 0
      }
    }
  }
  return matrix
}
