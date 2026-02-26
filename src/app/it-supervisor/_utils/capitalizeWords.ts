export default function capitalizeWords(str: string) {
  // 1. Optional: convert the entire string to lowercase for consistency
  str = str.toLowerCase();

  // 2. Split the string into an array of words
  const words = str.split(" ");

  // 3. Map over the words array, capitalizing the first letter of each word
  const capitalizedWords = words.map((word) => {
    // Return the first character capitalized + the rest of the word
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  // 4. Join the capitalized words back into a single string with spaces
  return capitalizedWords.join(" ");
}
