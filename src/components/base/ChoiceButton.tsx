import React, { LabelHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { palette } from '@/lib/styles/palette';

export type ButtonSizes = 'small' | 'medium';
export type ButtonVariants = 'default' | 'gray' | 'grayBlack';
export type ButtonColors = 'white' | 'gray' | 'black';

export interface LabelProps extends Omit<LabelHTMLAttributes<HTMLLabelElement>, 'size' | 'color' | 'for'> {
  isMultiple?: boolean;
  name?: string;
  id?: string;
  children: React.ReactNode;
  size?: ButtonSizes;
  variant?: ButtonVariants;
  boxShadow?: boolean;
  color?: ButtonColors;
  fontSize?: number;
  fontWeight?: 300 | 400 | 600 | 700;
  fullWidth?: boolean;
  width?: number;
  height?: 38 | 48 | 70 | 100;
}

const ChoiceButton = ({
  isMultiple = false,
  name,
  id,
  children,
  size = 'small',
  fontSize,
  variant = 'default',
  boxShadow = false,
  color = 'white',
  fullWidth = true,
  width,
  height,
  fontWeight,
  ...others
}: LabelProps) => {
  return (
    <>
      {isMultiple ? <InputBlock type="checkbox" id={id} name={name} /> : <InputBlock type="radio" id={id} name={name} />}
      <Label
        htmlFor={id}
        size={size}
        variant={variant}
        boxShadow={boxShadow}
        color={color}
        fontSize={fontSize}
        fontWeight={fontWeight}
        fullWidth={fullWidth}
        width={width}
        height={height}
        {...others}
      >
        {children}
      </Label>
    </>
  );
};

type ChoiceButtonBlockProps = Omit<LabelProps, 'children'>;

const InputBlock = styled.input`
  width: 0;
  height: 0;
  position: absolute;
  left: -9999px;

  &[type='radio']:checked + label {
    font-weight: 700;
    background-color: ${palette.primary};
    color: ${palette.white};
  }

  &[type='checkbox']:checked + label {
    font-weight: 700;
    background-color: ${palette.primary};
    color: ${palette.white};
  }
`;

const Label = styled.label<ChoiceButtonBlockProps>`
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
  z-index: 1;

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
    props.boxShadow &&
    css`
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    `};
`;

type ButtonSizeBuilder = Pick<ChoiceButtonBlockProps, 'height' | 'fontSize' | 'fontWeight'>;

const buttonSizeBuilder = ({ height, fontSize, fontWeight }: ButtonSizeBuilder) => css`
  height: ${height}px;
  font-size: ${fontSize}px;
  font-weight: ${fontWeight};
`;

const sizes = ({ fontSize, fontWeight, height }: Pick<ChoiceButtonBlockProps, 'fontWeight' | 'fontSize' | 'height'>) => ({
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
    font-weight: 400;
  `}

${variant === 'grayBlack' &&
  css`
    background-color: ${palette.grayLight};
    color: ${palette.black};
    font-weight: 400;
  `}


  &:focus {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

export default ChoiceButton;
