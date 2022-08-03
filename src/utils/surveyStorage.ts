export const MEETING_STORAGE_KEY = 'meeting';
export const DATING_STORAGE_KEY = 'dating';

const surveyStorage = {
  remove() {
    localStorage.removeItem(MEETING_STORAGE_KEY);
    localStorage.removeItem(DATING_STORAGE_KEY);
  },
};

export default surveyStorage;
