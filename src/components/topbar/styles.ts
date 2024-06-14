import styled from "styled-components";
import colors from "../../constants/colors";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: fit-content;
  background: ${colors.gray_background};
  padding: 20px;
  box-sizing: border-box;
  gap: 16px;
`

export const Button = styled.div`
  display: flex;
  height: 20px;
  background-color: white;
  padding: 8px 16px;
  border: 1px solid ${colors.gray_secondary};
  border-radius: 4px;
  color: ${colors.gray_primary};
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: 500;
  position: relative;
`

export const Options = styled.div`
  display: flex;
  width: 100%;
  position: absolute;
  background-color: white;
  top: 36px;
  left: 0px;
  flex-direction: column;
  border: 1px solid ${colors.gray_secondary};
  border-radius: 4px;
  z-index: 1;
`

export const Option = styled.div`
  padding: 8px;

  &:hover {
    background-color: ${colors.gray_background};
  }
`