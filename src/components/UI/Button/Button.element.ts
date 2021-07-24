import styled from 'styled-components';
import { darken } from 'polished';

interface ButtonProps {
  readonly variant?: 'dense' | 'outline' | 'flat';
  readonly color?: 'primary' | 'light';
  readonly size?: 'sm' | 'md' | 'lg';
  readonly border?: 'rounded' | 'pilled' | 'circled';
}

export const Button = styled.button<ButtonProps>`
  outline: none;
  letter-spacing: 0.5px;
  cursor: pointer;
  border: none;
  font-weight: 600;
  transition: background 0.2s ease-in-out;
  /* font-size */
  font-size: ${({ size, theme }) => {
    if (size && size === 'lg') return theme.fontSize.md;
    else return theme.fontSize.md;
  }};

  /* border */
  border-radius: ${({ border, theme }) => (border ? theme.borderRadius[border] : theme.borderRadius.rounded)};
  /* padding */
  padding: ${({ size }) => {
    if (size === 'lg') return '1.6rem 4rem';
    return '1.2rem 3rem;';
  }};

  /* variant */
  ${({ color, variant, theme }) => {
    const activeColor: string = color ? theme.colors[color] : theme.colors.primary;
    if (variant === 'outline') {
      return `border: 2px solid ${activeColor}; background: transparent; color: ${activeColor};`;
    } else if (variant === 'flat') {
      return `border: 2px solid transparent; background: transparent; color: ${activeColor};`;
    }
    if (color === 'light') return `background: ${activeColor}; color: ${theme.colors.primary};`;
    return `background: ${activeColor}; color: ${theme.colors.light};`;
  }}

  &:hover {
    ${({ color, variant, theme }) => {
      const activeColor: string = color ? theme.colors[color] : theme.colors.primary;
      if (variant === 'flat') return '';
      if (variant === 'outline')
        return `color: ${theme.colors.light}; background: ${darken(0.1, activeColor)};`;
      return `background: ${darken(0.1, activeColor)}`;
    }}
  }
`;
