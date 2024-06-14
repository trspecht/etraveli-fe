import styled from "styled-components";
import colors from "../../constants/colors";

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 20px;
  background-color: white;
  padding: 8px 16px;
  border: 1px solid ${colors.gray_secondary};
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`

export const InnerContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`

export const Icon = styled.img`
  height: 14px;
  width: 14px;
  margin-right: 4px;
`

export const Input = styled.input`
  background-color: transparent;
  text-decoration: none;
  width: 100%;
  color: ${colors.gray_primary};
  font-size: 12px;
  font-weight: 500;
  caret-color: auto;
  border: none;
  outline: none;

  &:focus {
    border: none;
    outline: none;
  }
`