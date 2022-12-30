const MONTH = [
  'янв.',
  'февр.',
  'апр.',
  'авг.',
  'сент.',
  'окт.',
  'нояб.',
  'дек.',
];

const isToday = (before: Date, today: Date) => {
  return (
    before.getDate() === today.getDate() &&
    before.getMonth() === today.getMonth() &&
    before.getFullYear() === today.getFullYear()
  );
};

const isThisYear = (before: Date, today: Date) => {
  return before.getFullYear() === today.getFullYear();
};

export function formatDate(strDate: string) {
  const date = new Date(strDate);

  const now = new Date();

  if (isToday(date, now)) {
    let hh: string | number = date.getHours();
    hh < 10 ? (hh = '0' + hh) : hh;

    let mn: number | string = date.getMinutes();
    mn < 10 ? (mn = '0' + mn) : mn;

    return `${hh}:${mn}`;
  }

  if (isThisYear(date, now)) {
    let mm: string | number = date.getMonth();
    let dd: string | number = date.getDate();
    if (dd < 10) {
      dd = '0' + dd;
    }

    return `${dd} ${MONTH[mm]}`;
  }

  let dd: string | number = date.getDate();
  if (dd < 10) {
    dd = '0' + dd;
  }

  let mm: string | number = date.getMonth() + 1;
  if (mm < 10) {
    mm = '0' + mm;
  }

  let yy: string | number = date.getFullYear();
  if (yy < 10) {
    yy = '0' + yy;
  }

  return dd + '.' + mm + '.' + yy;
}
