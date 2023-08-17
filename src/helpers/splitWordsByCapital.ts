export function splitWordsByCapital(word: string): string {
  const words = word.split(/(?=[A-Z])/);
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1),
  );

  return capitalizedWords.join(' ');
}
