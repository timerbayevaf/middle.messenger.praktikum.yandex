// [1, 2, 3, 4] => 4

function last(list) {
  if (!Array.isArray(list)) {
    return undefined;
  }

  const length = list.length;
  return length ? list[length - 1] : undefined;
}

export { last };
