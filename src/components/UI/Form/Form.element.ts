import styled from 'styled-components';

// FORM
export const Form = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const FormTitle = styled.h2`
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${({ theme }) => theme.heading.primary};
  margin-bottom: 5rem;
  font-weight: 500;
`;

// FORM GROUP
export const FormGroup = styled.div`
  width: 100%;
  margin-bottom: 3rem;
`;

// FORM INPUT
export const FormInputHolder = styled.div`
  width: 100%;
`;

export const FormInputBorder = styled.div`
  width: 100%;
  height: 3px;
  background-color: ${(props) => props.theme.colors.muted};
  margin-top: 1px;
  position: relative;
  &::after,
  &::before {
    content: '';
    display: table;
    position: absolute;
    width: 0;
    height: 100%;
    top: 0;
    left: 0;
    transition: width 0.5s cubic-bezier(0.74, 0.73, 0.23, 1);
  }
  &::after {
    background-color: ${({ theme }) => theme.colors.primary};
  }
  &::before {
    background-color: ${({ theme }) => theme.colors.red};
  }
`;

export const FormInputLabel = styled.label`
  transform: translateY(-7.5rem);
  font-size: ${(props) => props.theme.fontSize.sm};
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary};
  margin-left: 0.5rem;
  margin-top: 0.7rem;
  display: block;
  transition: all 0.3s;
`;

export const FormInput = styled.input`
  letter-spacing: 0.5px;
  border: none;
  outline: none;
  width: 100%;
  font-size: calc(${({ theme }) => theme.fontSize.lg} - 0.2rem);
  padding: 1rem 0.6rem;
  background-color: transparent;
  color: ${(props) => props.theme.colors.dark};
  display: block;
  position: relative;
  font-weight: 500;
  &::placeholder {
    color: ${(props) => props.theme.colors.muted};
    font-family: ${(props) => props.theme.fonts.textFont};
    font-weight: 600;
  }
  &:valid:not(:placeholder-shown) ~ ${FormInputBorder}::after {
    width: 100%;
  }
  &:not(valid):not(:placeholder-shown) ~ ${FormInputBorder}::before {
    width: 100%;
  }
  &:focus:not(:valid) ~ ${FormInputBorder}::after {
    left: auto;
    right: 0;
    width: 0;
  }
  &:focus:valid ~ ${FormInputBorder}::before {
    left: auto;
    right: 0;
    width: 0;
  }
  &:focus:valid ~ ${FormInputBorder}::after {
    width: 100%;
  }
  &:focus:not(:valid) ~ ${FormInputBorder}::before {
    width: 100%;
  }
  &:placeholder-shown ~ ${FormInputLabel} {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-6rem);
  }
`;
