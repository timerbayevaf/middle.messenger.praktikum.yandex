function sortByTime(a: string, b: string) {
  const time1 = new Date(a).getTime();
  const time2 = new Date(b).getTime();

  return time1 - time2;
}

export { sortByTime };
