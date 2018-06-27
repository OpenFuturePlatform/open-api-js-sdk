export const addressValidation = address => {
  const errors = [];
  if (!address.startsWith('0x')) errors.push('A developer address should beging with 0x');
  if (address.length !== 42) errors.push('A developer address should be 42 characters long');
  return errors;
};
