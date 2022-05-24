import { ReactNode, ReactPortal } from 'react';
import reactDom from 'react-dom';

interface ModalPortalProps {
  children: ReactNode;
}

function ModalPortal({ children }: ModalPortalProps): ReactPortal {
  const modalEl = document.getElementById('modal-root');
  return reactDom.createPortal(children, modalEl!);
}

export default ModalPortal;
