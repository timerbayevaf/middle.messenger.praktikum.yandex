type Value = string | number | boolean | undefined | null;
type Mapping = { [key: string]: boolean };

type Argument = Value | Mapping;

function cn(...args: Argument[]) {
  const list = args.reduce((prev: string[], current) => {
    if (typeof current === 'string') {
      return [...prev, current];
    }
    if (typeof current === 'object' && current !== null) {
      const keys = Object.keys(current).filter(
        (key) => current.hasOwnProperty(key) && current[key] === true
      );
      return prev.concat(keys);
    }

    return prev;
  }, []);

  return list.join(' ');
}

export { cn };
