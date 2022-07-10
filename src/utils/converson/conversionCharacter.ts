/**
 * @description 들어온 Body를 적절한 단어로 변경
 */
export const conversionCharacter = (body: string) => {
  return { VERY_QUIET: '많이 조용한', A_LITTLE_QUIET: '조금 조용한', VERY_ACTIVE: '많이 활발한', A_LITTLE_ACTIVE: '조금 활발한' }[body];
};
``;
