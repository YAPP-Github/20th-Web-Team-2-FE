export const MEETING_STORAGE_KEY = 'meeting';
export const DATING_STORAGE_KEY = 'dating';

const surveyStorage = {
  remove() {
    sessionStorage.removeItem(MEETING_STORAGE_KEY);
    sessionStorage.removeItem(DATING_STORAGE_KEY);
  },
};

export default surveyStorage;
