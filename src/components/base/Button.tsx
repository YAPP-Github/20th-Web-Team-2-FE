import React from 'react';
import styled, { css } from 'styled-components';
import { palette } from '@/lib/styles/palette';
import { ButtonProps, sizes, getVariant } from '@/utils/buttons';

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
  transition: background-color 300ms, box-shadow 300ms;
  cursor: pointer;

  ${({ size, fontWeight, fontSize, height }) => sizes({ fontSize, fontWeight, height })[size ?? 'small']};
  ${(props) => getVariant(props.variant ?? 'default', props.disabled ?? false)};

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
      font-weight: 700;
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
      background-color: ${palette.grayLight};
      color: rgba(0, 0, 0, 0.6);
      cursor: not-allowed;
    `}
`;

Button.displayName = 'Button';

export default Button;
