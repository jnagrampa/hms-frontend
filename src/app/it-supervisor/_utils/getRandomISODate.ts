/**
 * Generates a random UTC datetime string between two dates.
 * @param start - Start date string (UTC)
 * @param end - End date string (UTC)
 * @returns A random ISO 8601 datetime string.
 */
export default function getRandomISODate(start: string, end: string): string {
  const startTime = new Date(start).getTime();
  const endTime = new Date(end).getTime();

  if (isNaN(startTime) || isNaN(endTime)) {
    throw new Error("Invalid date format provided");
  }

  // Calculate random timestamp between start and end
  const randomTime = new Date(
    startTime + Math.random() * (endTime - startTime),
  );

  // Return as ISO string (UTC) [3]
  return randomTime.toISOString();
}

// Example usage:
// const start = "2023-01-01T00:00:00Z";
// const end = "2023-12-31T23:59:59Z";
// console.log(getRandomISODate(start, end));
// Output: e.g., "2023-07-15T12:34:56.789Z"
