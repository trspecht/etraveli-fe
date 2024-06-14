import styled from "styled-components";
import colors from "../../constants/colors";

interface ItemProps {
  selected: boolean
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
`

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
  font-size: 24px;
  font-weight: 600;
`

export const Text = styled.a`
  color: ${colors.gray_primary};
  font-size: 12px;
`

export const Description = styled.span`
  flex: 1;
  display: flex;
  flex-direction: column;
  color: ${colors.gray_primary};
  font-size: 14px;
`

export const Poster = styled.img`
  display: flex;
  height: 400px;
  width: fit-content;
`

export const Pills = styled.div`
  display: flex;
  gap: 8px;
`