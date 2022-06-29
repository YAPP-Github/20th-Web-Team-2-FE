import { palette } from '@/lib/styles/palette';
import React from 'react';
import styled from 'styled-components';

interface MenuBlockProps {
  isMenu: boolean;
  onToggleMenu: () => void;
}
function MenuBlock({ isMenu, onToggleMenu }: MenuBlockProps) {
  return (
    <>
      <NavBarBlock isMenu={isMenu}>asdasd</NavBarBlock>
      <NavBackground onClick={onToggleMenu} isMenu={isMenu} />
    </>
  );
}

const NavBackground = styled.div<{ isMenu: boolean }>`
  width: 100%;
  height: 100vh;
  background-color: black;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 800;
  opacity: 0.5;
  ${({ isMenu }) => (isMenu ? 'display: block' : 'display: none')}
`;

const NavBarBlock = styled.div<{ isMenu: boolean }>`
  width: 100%;
  max-width: 300px;
  position: fixed;
  height: 100vh;
  top: 0;
  left: 0;
  background: ${palette.primary};
  z-index: 9000;
  ${({ isMenu }) => (isMenu ? 'visibility: visible' : 'visibility : hidden')};
  transition: all 0.2s ease-in-out;
  transform: translateX(${({ isMenu }) => (isMenu ? 'calc(100vw - 300px)' : '100vw')});
`;
export default MenuBlock;
