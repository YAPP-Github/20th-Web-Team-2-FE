import { patchMeetingSurvey } from '@/lib/api/meeting';
import { Dating } from '@/types/dating';
import { Meeting } from '@/types/meeting';

const useUpdateSurvey = () => {
  const onUpdateMeetingSurvey = async (data: Partial<Meeting>) => {
    try {
      await patchMeetingSurvey(data);
    } catch (error) {
      console.log(error);
    }
  };
  const onUpdateDatingSurvey = async (data: Partial<Dating>) => {
    try {
      await patchMeetingSurvey(data);
    } catch (error) {
      console.log(error);
    }
  };

  return { onUpdateMeetingSurvey, onUpdateDatingSurvey };
};

export default useUpdateSurvey;
