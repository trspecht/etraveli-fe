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