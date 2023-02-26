import { SPEC_TYPE, ValidateType } from 'constants';

function isSpecName<T extends SPEC_TYPE>(validateRules: ValidateType[]) {
  return function (name: string): name is T {
    return validateRules.includes(name as SPEC_TYPE);
  };
}

export { isSpecName };
