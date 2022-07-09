/**
 * @description 들어온 play를 적절한 단어로 변경
 */
export const conversionPlay = (play: string) => {
  return { ALL: '술게임, 얘기하면서 둘 다', GAME: '술게임 할래요!', TALK: '얘기하면서 놀래요.' }[play];
};
``;
