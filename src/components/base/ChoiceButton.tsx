import React, { InputHTMLAttributes, LabelHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { palette } from '@/lib/styles/palette';
import { ButtonSizes, ButtonVariants, ButtonColors, sizes, getVariant } from '@/utils/buttons';

type ChoiceButtonVariants = Exclude<ButtonVariants, 'kakao'>;
interface CommonProps {
  checked?: boolean;
  children: React.ReactNode;
  boxShadow?: boolean;
  color?: ButtonColors;
  fontSize?: number;
  fontWeight?: 300 | 400 | 600 | 700;
  fullWidth?: boolean;
  width?: number;
  height?: 38 | 48 | 70 | 72 | 100;
  variant?: ChoiceButtonVariants;
  size?: ButtonSizes;
  invisible?: boolean;
}
interface InputBaseProps extends CommonProps, Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'color' | 'children' | 'height' | 'width'> {
  isMultiple?: boolean;
  name: string;
  id: string;
}
interface LabelProps extends CommonProps, Omit<LabelHTMLAttributes<HTMLLabelElement>, 'children' | 'color'> {
  id?: string;
}

const ChoiceButton = ({
  isMultiple = false,
  id,
  name,
  checked,
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
  invisible,
  ...others
}: InputBaseProps) => {
  console.log(invisible);
  return (
    <>
      {isMultiple ? (
        <InputBlock type="checkbox" id={id} name={name} checked={checked} {...others} />
      ) : (
        <InputBlock type="radio" id={id} name={name} checked={checked} {...others} />
      )}
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
        invisible={invisible}
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
  ${(props) =>
    props.invisible &&
    css`
      visibility: hidden;
    `};
`;

export default ChoiceButton;
