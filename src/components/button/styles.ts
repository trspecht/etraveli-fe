import styled from "styled-components";
import colors from "../../constants/colors";

export const Container = styled.div`
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
`