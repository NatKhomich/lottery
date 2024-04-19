export const generateRandomNumbers = (size: number) => {
  const generatedNumbersSet = new Set<number>()

  while (generatedNumbersSet.size < size) {
    generatedNumbersSet.add(Math.floor(Math.random() * 19) + 1)
  }

  return Array.from(generatedNumbersSet)
}
