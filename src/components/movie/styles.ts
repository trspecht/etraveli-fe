import styled from "styled-components";
import colors from "../../constants/colors";

interface ItemProps {
  selected: boolean
}

export const Item = styled.div<ItemProps>`
  display: flex;
  padding: 16px;
  border-bottom: 1px solid ${colors.gray_secondary};
  color: ${colors.gray_primary};
  justify-content: space-between;
  background-color: ${(props) => props.selected ? colors.gray_secondary : "white"};
`

export const Title = styled.a`
  color: ${colors.gray_primary};
  font-size: 16px;
  font-weight: 600;
`

export const Text = styled.a`
  color: ${colors.gray_primary};
  font-size: 12px;
`

export const Description = styled.span`
  flex: 1;
  display: flex;
  margin-top: 20px;
  flex-direction: column;
  color: ${colors.gray_primary};
  font-size: 12px;
`