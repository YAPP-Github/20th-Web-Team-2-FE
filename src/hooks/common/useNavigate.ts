import { useNavigate } from 'react-router-dom';

export function useMeetingNavigate() {
  const navigate = useNavigate();

  return (routerName: string) => navigate('/meeting/' + routerName);
}

export function useDatingNavigate() {
  const navigate = useNavigate();

  return (routerName: string) => navigate('/dating/' + routerName);
}
