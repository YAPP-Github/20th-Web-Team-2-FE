import { useState, useMemo } from 'react';
import { type Channel } from '@/types/meeting';

const useChannelCheck = (isMulti: boolean, initData: Channel) => {
  const [channelMultiCheckList, setChannelMultiCheckList] = useState<{ text: string; name: Channel; checked: boolean }[]>([
    { text: '페이스북', name: 'FACEBOOK', checked: false },
    { text: '인스타그램', name: 'INSTAGRAM', checked: false },
    { text: '카카오단톡방', name: 'KAKAOROOM', checked: false },
    { text: '카톡플친', name: 'KAKAOPLUS', checked: false },
    { text: '지인추천', name: 'FRIEND', checked: false },
    { text: '기타 커뮤니티', name: 'COMMUNITY', checked: false },
  ]);

  const [channelCheck, setChannelCheck] = useState<Channel>(initData);

  if (isMulti) {
    const onChangeMultiCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name } = e.target;
      setChannelMultiCheckList(channelMultiCheckList.map((item) => (item.name === name ? { ...item, checked: !item.checked } : item)));
    };

    const isMultiChecked = useMemo(() => channelMultiCheckList.some((item) => item.checked), [channelMultiCheckList]);

    return { channelMultiCheckList, onChangeMultiCheck, isMultiChecked };
  }

  const onChangeCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setChannelCheck(name as Channel);
  };

  const isChecked = useMemo(() => Boolean(channelCheck), [channelCheck]);

  return { channelCheck, onChangeCheck, isChecked };
};

export default useChannelCheck;
