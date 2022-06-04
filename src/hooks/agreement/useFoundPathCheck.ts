import { useState } from 'react';

const useFoundPathCheck = () => {
  const [pathCheckList, setPathCheckList] = useState<{ text: string; name: string; checked: boolean }[]>([
    { text: '페이스북', name: 'facebook', checked: false },
    { text: '인스타그램', name: 'instagram', checked: false },
    { text: '카카오단톡방', name: 'kakao', checked: false },
    { text: '카톡플친', name: 'kakaoPlus', checked: false },
    { text: '지인추천', name: 'friend', checked: false },
    { text: '기타 커뮤니티', name: 'etc', checked: false },
  ]);

  const onChangeCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setPathCheckList(pathCheckList.map((item) => (item.name === name ? { ...item, checked: !item.checked } : item)));
  };

  return { pathCheckList, onChangeCheck };
};

export default useFoundPathCheck;
