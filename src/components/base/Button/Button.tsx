import React, { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { palette } from '@/lib/styles/palette';

export type ButtonSizes = 'small' | 'medium' | 'large';
/*
  medium: 이전, 다음 버튼과 크기는 같은데 font-size가 14로 다름
*/
export type ButtonVariants = 'default' | 'gray' | 'grayBlack';
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
  height?: number;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      size = 'small',
      fontSize,
      variant = 'default',
      boxShadow = false,
      disabled = false,
      color = 'white',
      fullWidth = true,
      width,
      fontWeight = 400,
      ...others
    },
    ref,
  ) => {
    if (fullWidth && width) console.error('width가 있으면 fullWidth는 falsy 해야함');

    return (
      <ButtonBlock
        ref={ref}
        size={size}
        variant={variant}
        boxShadow={boxShadow}
        disabled={disabled}
        color={color}
        fontSize={fontSize}
        fontWeight={fontWeight}
        fullWidth={fullWidth}
        width={width}
        {...others}
      >
        {children}
      </ButtonBlock>
    );
  },
);

type ButtonBlockProps = Omit<ButtonProps, 'children'>;

const ButtonBlock = styled.button<ButtonBlockProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  user-select: none;
  white-space: nowrap;
  max-width: 100%;
  outline: none;
  border-radius: 4px;
  transition: background-color 300ms;
  cursor: pointer;

  ${(props) =>
    props.fullWidth &&
    !props.width &&
    css`
      width: 100%;
      min-width: 100%;
      max-width: 100%;
    `}

  ${(props) =>
    !props.fullWidth &&
    props.width &&
    css`
      width: ${props.width}px;
    `}
  

  ${({ size, fontWeight, fontSize }) => sizes({ fontSize, fontWeight })[size ?? 'small']};
  ${(props) => getVariant(props.variant ?? 'default')};
  ${(props) =>
    props.boxShadow &&
    css`
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    `};
  ${(props) =>
    props.disabled &&
    css`
      /* TODO: disabled 시 백그라운드 처리 */
      background-color: ${palette.grayDarker};
      cursor: not-allowed;

      &: hover {
        background-color: ${palette.grayDarker};
      }
    `}
`;

type ButtonSizeBuilder = Record<string, string | number | undefined>;

const buttonSizeBuilder = ({ height, fontSize, fontWeight }: ButtonSizeBuilder) => css`
  font-size: ${fontSize}px;
  height: ${height}px;
  font-weight: ${fontWeight};
`;

const sizes = ({ fontSize, fontWeight }: Pick<ButtonProps, 'fontWeight' | 'fontSize'>) => ({
  small: buttonSizeBuilder({
    height: 38,
    fontSize: fontSize ?? 12,
    lineHeight: 1.5,
    fontWeight: fontWeight ?? 600,
  }),
  medium: buttonSizeBuilder({
    height: 48,
    fontSize: fontSize ?? 14,
    lineHeight: 1.2142857143,
    fontWeight: fontWeight ?? 700,
  }),
  large: buttonSizeBuilder({
    height: 48,
    fontSize: fontSize ?? 16,
    lineHeight: 1.125,
    fontWeight: fontWeight ?? 700,
  }),
});

const getVariant = (variant: ButtonVariants) => css`
  border: none;

  ${variant === 'default' &&
  css`
    background-color: ${palette.primary};
    color: ${palette.white};
    font-weight: 600;

    &:hover {
      background-color: ${palette.gray};
    }
  `}

  ${variant === 'gray' &&
  css`
    background-color: ${palette.grayLight};
    color: rgba(0, 0, 0, 0.6);
    font-weight: 300;

    &:hover {
      /* TODO: hover 색 처리 */
    }
  `}

${variant === 'grayBlack' &&
  css`
    background-color: ${palette.grayLight};
    color: ${palette.black};
    font-weight: 400;

    &:hover {
      /* TODO: hover 색 처리 */
    }
  `}

  /* FIXME: hover, focus, active 될 때 각각 어떻게 될지 */
  &:focus {
    background-color: ${palette.primary};
    box-shadow: 0 0 1px 2px ${palette.gray};
  }
  &:active {
    background-color: ${palette.gray};
  }
`;

Button.displayName = 'Button';

export default Button;
