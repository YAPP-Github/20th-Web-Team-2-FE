import { SearchData } from '@/components/domain/survey/SearchSelector';
import { getUnivAPI } from '@/lib/api/university';
import { useEffect, useState } from 'react';

function useUnivLoad() {
  const [univs, setUnivs] = useState<SearchData[]>([]);
  useEffect(() => {
    const getAllUniv = async () => {
      try {
        const data = await getUnivAPI();
        setUnivs(data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllUniv();
  }, []);

  return { univs };
}

export default useUnivLoad;
