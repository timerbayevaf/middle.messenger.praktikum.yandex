/*
const object = {'a' : 1};
 
identity(object) === object; // => true

[null, 1, 2, null, undefined, true, {}, () => {}, 3].filter(_.identity);
// => [1, 2, true, Object {}, function(), 3]
*/

function identity(value) {
  return value;
}

export { identity };
