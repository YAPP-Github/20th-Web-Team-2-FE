/**
 * @description 들어온 DateCount를 적절한 단어로 변경
 */
export const conversionDateCount = (dateCount: string) => {
  return { ZERO: '모태솔로', ONETWO: '1~2회', THREEFOUR: '3~4회', FIVE: '5회 이상' }[dateCount];
};
``;
