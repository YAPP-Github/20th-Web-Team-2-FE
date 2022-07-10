/**
 * @description 들어온 typeOfMeeting를 적절한 단어로 변경
 */
export const conversionTypeOfMeeting = (meeting: string) => {
  return { ONE: '소개팅', TWO: '2:2 미팅', THREE: '3:3 미팅', FOUR: '4:4 미팅' }[meeting];
};
``;
