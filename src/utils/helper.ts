export const padNumber = (number: number | string, length: number): string => {
  return String(number).padStart(length, '0');
};
