export const getRandomPage = (): number => {
  return Math.floor(Math.random() * 100)
}

export const toTitleCase = (str: string): string => {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
