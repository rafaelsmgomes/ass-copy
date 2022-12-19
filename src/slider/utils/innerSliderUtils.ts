export const clamp = (num: number, lowerBound: number, upperBound: number) => {
  return Math.max(lowerBound, Math.min(num, upperBound))
}
