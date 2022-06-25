const AddCommaFunction = () => {
  const addComma = (index: number) => {
    if (index === 0) return;
    else return ',';
  };
  const addTailComma = (arrayLength: number, index: number) => {
    if (index === arrayLength - 1) return;
    else return ',';
  };

  return { addComma, addTailComma };
};

export default AddCommaFunction;
