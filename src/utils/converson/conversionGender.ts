/**
 * @description 들어온 gender을 적절한 단어로 변경
 */
export const conversionGender = (gender: string) => {
  return { FEMALE: '여성', MALE: '남성' }[gender];
};
``;
