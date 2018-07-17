import {ADDRESS_ERRORS} from '../const/errors';

export const addressValidation = address => {
  if (!address) return ADDRESS_ERRORS.REQUIRED_PARAMETER_ERROR;
  if (typeof address !== 'string') return ADDRESS_ERRORS.TYPE_IS_NOT_STRING_ERROR;
  if (!address.startsWith('0x')) return ADDRESS_ERRORS.STARTS_WITH_ERROR;
  if (address.length !== 42) return ADDRESS_ERRORS.CHARACTERS_COUNT_ERROR;
};
