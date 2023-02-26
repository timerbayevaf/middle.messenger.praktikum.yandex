import { isPlainObject } from './is-plan-object';

function get(
  obj: Record<string, unknown> | null | undefined | Object,
  path: string,
  defaultValue = ''
): string | undefined {
  if (!obj) {
    return defaultValue;
  }

  const pathArray = path.split('.');
  const value = pathArray.reduce((acc, item) => {
    if (isPlainObject(acc)) {
      return acc[item];
    }
    return undefined;
  }, obj);

  return isPlainObject(value) ? defaultValue : value;
}

export { get };
