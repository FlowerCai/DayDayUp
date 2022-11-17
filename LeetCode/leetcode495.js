var findPoisonedDuration = function (timeSeries, duration) {
  let end = timeSeries[0] + duration
  let res = 0
  const len = timeSeries.length
  for (let i = 0; i < len; i++) {
    let temp = timeSeries[i] + duration
    if (i > 0 && timeSeries[i] - timeSeries[i - 1] < duration) {
      res += timeSeries[i] - timeSeries[i - 1]
    } else {
      res += duration
    }
  }
  return res
}
