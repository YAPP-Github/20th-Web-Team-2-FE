/**
 * @description 들어온 department를 적절한 단어로 변경
 */
export const conversionDepartment = (department: string) => {
  return { LIBERAL: '문과', SCIENCE: '이과', ATHLETIC: '체육', ART: '예술' }[department];
};
``;
