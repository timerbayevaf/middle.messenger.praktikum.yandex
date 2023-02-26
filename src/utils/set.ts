type Indexed<T = unknown> = {
  [key in string]: T;
};

const isObject = (value?: unknown) => {
  return String(value) === '[object Object]';
};

function merge(lhs: Indexed, rhs: Indexed): Indexed {
  // Код здесь
  const obj = lhs || {};

  Object.entries(rhs).forEach(([key, value]) => {
    if (isObject(value) && obj[key] && isObject(obj[key])) {
      obj[key] = merge(obj[key] as Indexed, value as Indexed);
    } else {
      obj[key] = value;
    }
  });

  return obj;
}

function set(
  object: Indexed | unknown,
  path: string,
  value: unknown
): Indexed | unknown {
  // Код
  if (typeof path !== 'string') {
    throw new Error('path must be string');
  }

  if (!isObject(object)) {
    return object;
  }

  const pathArray = path.split('.');
  const rhs = pathArray.reduceRight((acc, item) => ({ [item]: acc }), value);

  return merge(object as Indexed, rhs as Indexed);
}

export default set;
