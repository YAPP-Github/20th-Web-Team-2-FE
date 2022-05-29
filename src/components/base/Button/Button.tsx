import React, { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
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
  height?: 38 | 48 | 70 | 100;
  active?: boolean;
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
      height,
      fontWeight,
      active = false,
      ...others
    },
    ref,
  ) => {
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
        height={height}
        active={active}
        {...others}
      >
        {children}
      </ButtonBlock>
    );
  },
);
Button.displayName = 'Button';

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

  ${({ size, fontWeight, fontSize, height }) => sizes({ fontSize, fontWeight, height })[size ?? 'small']};
  ${(props) => getVariant(props.variant ?? 'default')};

  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
      max-width: 100%;
    `}

  ${(props) =>
    props.width &&
    css`
      width: ${props.width}px;
    `}

  ${(props) =>
    props.active &&
    css`
      background-color: ${palette.primary};
      color: ${palette.white};
    `}

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

// type ButtonSizeBuilder = Record<string, string | number | undefined>;
type ButtonSizeBuilder = Pick<ButtonBlockProps, 'height' | 'fontSize' | 'fontWeight'>;

const buttonSizeBuilder = ({ height, fontSize, fontWeight }: ButtonSizeBuilder) => css`
  height: ${height}px;
  font-size: ${fontSize}px;
  font-weight: ${fontWeight};
`;

const sizes = ({ fontSize, fontWeight, height }: Pick<ButtonProps, 'fontWeight' | 'fontSize' | 'height'>) => ({
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

  &:focus {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  }
  ${variant === 'kakao' &&
  css`
    background-color: ${palette.kakao};
    color: ${palette.black};
    font-weight: 700;

    &:hover {
    }
  `}

  &:focus {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

Button.displayName = 'Button';

export default Button;
