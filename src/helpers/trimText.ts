const MAX_TEXT_LENGTH = 40;

export const trimText = (
  text: string | null,
  maxTextLength: number = MAX_TEXT_LENGTH,
): string => {
  if (text === null) {
    return 'Description is missing ...';
  }

  if (text.length <= maxTextLength) {
    return text;
  }

  return `${text.slice(0, maxTextLength)}...`;
};
