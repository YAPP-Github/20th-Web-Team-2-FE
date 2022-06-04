import { useNavigate } from 'react-router-dom';

export default function useMeetingNavigate() {
  const navigate = useNavigate();

  return (routerName: string) => navigate('/meeting/' + routerName);
}
