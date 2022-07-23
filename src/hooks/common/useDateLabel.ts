function useDateParser(date: string) {
  const parseDate = new Date(date);

  const month = parseDate.getMonth() + 1;
  const day = parseDate.getDate();
  const hour = parseDate.getHours() + 1;

  return `${month}월 ${day}일 ${hour}시`;
}

export default useDateParser;
