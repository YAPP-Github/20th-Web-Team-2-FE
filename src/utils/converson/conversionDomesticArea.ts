/**
 * @description 들어온 domesticArea를 적절한 단어로 변경
 */
export const conversionDomesticArea = (domesticArea: string) => {
  return { ICN: '인천', SNW: '서북', SNE: '동북', SSW: '서남', SSE: '동서', GN: '경기 북부', GS: '경기 남부' }[domesticArea];
};
``;
