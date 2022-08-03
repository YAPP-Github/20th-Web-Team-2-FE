import React, { useMemo, useState } from 'react';

const useAgreementCheck = () => {
  const [checkedList, setCheckedList] = useState([
    {
      name: 'over19',
      text: '(필수) 만 19세 이상입니다',
      checked: false,
      link: '',
    },
    {
      name: 'serviceAgree',
      text: '(필수) 서비스 이용약관 동의서',
      checked: false,
      link: 'https://charmed-hyacinth-41c.notion.site/0861ec794c8f43a0b466c20e82f12de7',
    },
    {
      name: 'privacyAgree',
      text: '(필수) 개인정보 수집 및 이용 동의서',
      checked: false,
      link: 'https://charmed-hyacinth-41c.notion.site/8f1e211d74774e7288ca3352c54566a0',
    },
  ]);

  const [checkedChoiceList, setCheckedChoiceList] = useState([
    {
      name: 'eventAgree',
      text: '(선택) 혜택/이벤트 정보 수신 동의서',
      checked: false,
      link: '',
    },
  ]);

  const isAllchecked = useMemo(() => {
    return checkedList.every((item) => item.checked) && checkedChoiceList.every((item) => item.checked);
  }, [checkedList, checkedChoiceList]);

  const isEssentialChecked = useMemo(() => checkedList.every((item) => item.checked), [checkedList]);

  const onCheckAll = () => {
    setCheckedList(checkedList.map((item) => ({ ...item, checked: !isAllchecked })));
    setCheckedChoiceList(checkedChoiceList.map((item) => ({ ...item, checked: !isAllchecked })));
  };

  const onChangeCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setCheckedList(checkedList.map((item) => (item.name === name ? { ...item, checked: !item.checked } : item)));
  };
  const onChangeChoiceCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setCheckedChoiceList(checkedChoiceList.map((item) => (item.name === name ? { ...item, checked: !item.checked } : item)));
  };

  return {
    isEssentialChecked,
    isAllchecked,
    checkedList,
    checkedChoiceList,
    onCheckAll,
    onChangeCheck,
    onChangeChoiceCheck,
  };
};

export default useAgreementCheck;
