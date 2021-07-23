import styled from 'styled-components';

// VARIANTS: dense, outline, flat
// COLOR: primary, light
// SIZE: sm, md, lg
// RADIUS: rounded, pilled, circled

interface ButtonProps {
  readonly variant?: string;
  readonly color?: string;
  readonly size?: string;
  readonly radius?: string;
}

export const Button = styled.button<ButtonProps>`
  outline: none;
  letter-spacing: 0.5px;
  font-weight: 600;
  cursor: pointer;
  display: inline;
  border: none;
  ${(props) => {
    return '';
  }}
`;
