import { patchDatingSurvey } from '@/lib/api/dating';
import { patchMeetingSurvey } from '@/lib/api/meeting';
import { Dating } from '@/types/dating';
import { Meeting } from '@/types/meeting';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const useUpdateSurvey = () => {
  const location = useLocation();
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    setIsUpdate(location.pathname.includes('updating'));
  }, [location]);

  const onUpdateMeetingSurvey = async (data: Partial<Meeting>) => {
    try {
      await patchMeetingSurvey(data);
    } catch (error) {
      console.log(error);
    }
  };
  const onUpdateDatingSurvey = async (data: Partial<Dating>) => {
    try {
      await patchDatingSurvey(data);
    } catch (error) {
      console.log(error);
    }
  };

  return { onUpdateMeetingSurvey, onUpdateDatingSurvey, isUpdate };
};

export default useUpdateSurvey;
