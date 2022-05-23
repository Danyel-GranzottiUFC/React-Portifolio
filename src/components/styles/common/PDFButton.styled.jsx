import styled from "styled-components";

export const PDFButton = styled.a`
  background: ${({ primary, theme }) =>
    primary ? theme.colors.red : "none"};
  color: ${({ primary, theme }) =>
    primary ? theme.colors.white : theme.colors.green};
  padding: 5px;
  margin: ${({ margin }) => margin};
  border: 2px solid ${({ theme }) => theme.colors.red};
  border-radius: 5px;
  font-size: 22px;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  display: inline-block;

  &:hover {
    background: ${({ primary, theme }) =>
      primary ? theme.colors.redHover : "none"};
    color: ${({ primary, theme }) =>
      primary ? theme.colors.white : theme.colors.redHover};
    border: 2px solid ${({ theme }) => theme.colors.redHover};
  }
`;