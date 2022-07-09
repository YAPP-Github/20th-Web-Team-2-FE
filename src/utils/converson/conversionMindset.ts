/**
 * @description 들어온 mindset을 적절한 단어로 변경
 */
export const conversionMindset = (mindset: string) => {
  return { ALL: '친구랑 노는, 설레는 둘 다', FRIEND: '친구랑 노는 느낌', LOVE: '설레는 느낌' }[mindset];
};
