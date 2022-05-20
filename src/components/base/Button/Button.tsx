import React, { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

export type ButtonSizes = 'medium' | 'large';
export type ButtonVariants = 'default' | 'gray' | 'grayBlack';
export type ButtonColors = 'white' | 'gray' | 'black';

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'size' | 'color'> {
  children: React.ReactNode;
  size?: ButtonSizes;
  variant?: ButtonVariants;
  boxShadow?: boolean;
  disabled?: boolean;
  color?: ButtonColors;
  fontWeight?: 400 | 700;
  fullWidth?: boolean;
  width?: number;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      size = 'medium',
      variant = 'default',
      boxShadow = false,
      disabled = false,
      color = 'white',
      loading = false,
      fullWidth = true,
      width,
      fontWeight = 400,
      ...others
    },
    ref,
  ) => {
    if (fullWidth && width)
      console.error('width가 있으면 fullWidth는 falsy 해야함');

    return (
      <ButtonBlock
        ref={ref}
        size={size}
        variant={variant}
        boxShadow={boxShadow}
        disabled={disabled}
        color={color}
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

type ButtonBlockProps = Omit<ButtonProps, 'children' | 'disabled' | 'loading'>;

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
    css`
      width: 100%;
      min-width: 100%;
      max-width: 100%;
    `}

  ${({ fullWidth, width, size, fontWeight }) =>
    sizes({ fullWidth, width, fontWeight })[size ?? 'medium']};
  ${(props) => getVariant(props.variant ?? 'default')};
  ${(props) =>
    props.boxShadow &&
    css`
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    `};
`;

type ButtonSizeBuilder = Record<string, number | boolean>;

const buttonSizeBuilder = ({
  width,
  height,
  fontSize,
  fontWeight,
  fullWidth,
}: ButtonSizeBuilder) => css`
  height: ${height}px;
  font-size: ${fontSize}px;
  font-weight: ${fontWeight};

  ${fullWidth
    ? css`
        width: 100%;
      `
    : css`
        width: ${width}px;
        min-width: ${width}px;
      `}
`;

const sizes = ({
  fullWidth,
  width,
  fontWeight,
}: Pick<ButtonProps, 'fullWidth' | 'width' | 'fontWeight'>) => ({
  medium: buttonSizeBuilder({
    height: 38,
    fontSize: 12,
    lineHeight: 1.5,
    fontWeight: fontWeight ?? 400,
    fullWidth: fullWidth ?? true,
    width,
  }),
  large: buttonSizeBuilder({
    height: 48,
    fontSize: 18,
    lineHeight: 1,
    fontWeight: fontWeight ?? 400,
    fullWidth: fullWidth ?? true,
    width,
  }),
});

const getVariant = (variant: ButtonVariants) => css`
  border: none;

  ${variant === 'default' &&
  css`
    background-color: #49dac4;
    ${getColor('white')};
  `}

  ${variant === 'gray' &&
  css`
    background-color: #e8e8e8;
    ${getColor('gray')};
  `}

${variant === 'grayBlack' &&
  css`
    background-color: #e8e8e8;
    ${getColor('black')};
  `}

  &:hover {
    background-color: #f2f3f7;
  }
  &:focus {
    box-shadow: 0 0 1px 2px #e4e5ed;
  }
  &:active {
    background-color: '#e4e5ed';
  }
`;

const getColor = (color: ButtonColors) => css`
  ${color === 'white' &&
  css`
    color: #fff;
  `}

  ${color === 'gray' &&
  css`
    color: rgba(0, 0, 0, 0.6);
  `}

	${color === 'black' &&
  css`
    color: #000;
  `}
`;

export default Button;
