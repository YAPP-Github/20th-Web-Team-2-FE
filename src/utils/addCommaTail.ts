export const addCommaTail = (arrayLength: number, index: number) => {
  if (index === arrayLength - 1 || arrayLength === 0) return;
  else return ',';
};
