/**
 * Returns a random string from an array of strings.
 *
 * @param strings - An array of strings.
 * @returns A randomly selected string from the array, or undefined if the array is empty.
 */
export default function getRandomString(strings: string[]): string {
  if (strings.length === 0) {
    return "";
  }

  const randomIndex = Math.floor(Math.random() * strings.length);
  return strings[randomIndex];
}

// --- Example Usage ---

// const selectedString = getRandomString(randomStrings);

// if (selectedString !== undefined) {
//   console.log(`Randomly selected string: ${selectedString}`);
// } else {
//   console.log("The array was empty.");
// }
