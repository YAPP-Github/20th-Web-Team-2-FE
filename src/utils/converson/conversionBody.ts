/**
 * @description 들어온 Body를 적절한 단어로 변경
 */
export const conversionBody = (body: string) => {
  return { SKINNY: '마른 편', SLIM: '슬림 탄탄', MUSCULAR: '근육', CHUBBY: '통통한' }[body];
};
``;
