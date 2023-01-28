// [1, 2, 3, 4] => 1

function first<T>(list: T[]): T | undefined {
  if (!Array.isArray(list)) {
    return undefined;
  }

  return list.length ? list[0] : undefined;
}

export { first };
