export default function countTicketByStatus(arr: any[], status: string) {
  const count = arr.reduce(
    (acc, item) =>
      acc + (item.status.toLowerCase() === status.toLowerCase() ? 1 : 0),
    0,
  );
  return count;
}
