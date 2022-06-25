import React, { ButtonHTMLAttributes } from 'react';
import { css } from 'styled-components';
import { palette } from '@/lib/styles/palette';

export type ButtonSizes = 'small' | 'medium';
export type ButtonVariants = 'default' | 'gray' | 'grayBlack' | 'kakao';
export type ButtonColors = 'white' | 'gray' | 'black';

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'size' | 'color'> {
  children: React.ReactNode;
  size?: ButtonSizes;
  variant?: ButtonVariants;
  boxShadow?: boolean;
  disabled?: boolean;
  color?: ButtonColors;
  fontSize?: number;
  fontWeight?: 300 | 400 | 600 | 700;
  fullWidth?: boolean;
  width?: number;
  height?: 28 | 38 | 48 | 70 | 72 | 100;
  active?: boolean;
}

type ButtonSizeBuilder = Pick<ButtonProps, 'height' | 'fontSize' | 'fontWeight'>;

export const buttonSizeBuilder = ({ height, fontSize, fontWeight }: ButtonSizeBuilder) => css`
  height: ${height}px;
  font-size: ${fontSize}px;
  font-weight: ${fontWeight};
`;

export const sizes = ({ fontSize, fontWeight, height }: Pick<ButtonProps, 'fontWeight' | 'fontSize' | 'height'>) => ({
  small: buttonSizeBuilder({
    height: height ?? 38,
    fontSize: fontSize ?? 12,
    fontWeight: fontWeight ?? 600,
  }),
  medium: buttonSizeBuilder({
    height: height ?? 48,
    fontSize: fontSize ?? 14,
    fontWeight: fontWeight ?? 700,
  }),
});

export const getVariant = (variant: ButtonVariants, isDisabled?: boolean) => css`
  border: none;

  ${variant === 'default' &&
  css`
    background-color: ${palette.primary};
    color: ${palette.white};
    font-weight: 600;

    &:hover {
      background-color: ${palette.darkPrimary};
    }
    ${isDisabled &&
    css`
      font-weight: 300;
      background-color: ${palette.grayLight};
      color: rgba(0, 0, 0, 0.6);
      cursor: not-allowed;
    `}
  `}

  ${variant === 'gray' &&
  css`
    background-color: ${palette.grayLight};
    color: rgba(0, 0, 0, 0.6);
    font-weight: 400;

    &:hover {
      background-color: ${palette.grayLightHover};
    }
  `}

${variant === 'grayBlack' &&
  css`
    background-color: ${palette.grayLight};
    color: ${palette.black};
    font-weight: 400;

    &:focus {
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    }
  `}
  
  ${variant === 'kakao' &&
  css`
    background-color: ${palette.kakao};
    color: ${palette.black};
    font-weight: 700;
  `}

  &:focus {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  }
`;
