// [1, 2, 3, 4] => 4

function last<T>(list: T[]): T | undefined {
  if (!Array.isArray(list)) {
    return undefined;
  }

  const length = list.length;
  return length ? list[length - 1] : undefined;
}

export { last };
