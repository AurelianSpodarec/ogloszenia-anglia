export const shortenWord = (word, maxChars) =>
    word.length < maxChars ? word : word.slice(0, maxChars) + "...";