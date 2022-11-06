var searchMatrix = function (matrix, target) {
  const row = matrix.length
  const col = matrix[0].length
  let below = false
  let above = false
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (matrix[i][j] === target) {
        return true
      } else if (matrix[i][j] < target) {
        below = true
      } else if (matrix[i][j] > target) {
        above = true
      }
      if (below && above) {
        return false
      }
    }
  }
  return false
}
