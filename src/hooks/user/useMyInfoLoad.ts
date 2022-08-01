import { getMyInfo } from '@/lib/api/user';
import { useEffect, useState } from 'react';

const useMyInfoLoad = () => {
  const [info, setInfo] = useState<{ email: 'string'; university: string }>();
  useEffect(() => {
    const GetInfo = async () => {
      try {
        const response = await getMyInfo();
        setInfo(response);
      } catch (e) {
        console.log(e);
      }
    };
    GetInfo();
  }, []);
  return { info };
};

export default useMyInfoLoad;
