export function pick(data, total = 72) {
  const start = data.length < total ? data.length : total;

  return [...data.splice(0, start)];
}
