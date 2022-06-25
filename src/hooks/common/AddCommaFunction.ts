const AddCommaFunction = () => {
  const AddComma = (index: number) => {
    if (index === 0) return;
    else return ',';
  };
  const AddTailComma = (arrayLength: number, index: number) => {
    if (index === arrayLength - 1) return;
    else return ',';
  };

  return { AddComma, AddTailComma };
};

export default AddCommaFunction;
