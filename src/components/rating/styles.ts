import styled from "styled-components";

interface StarProps {
  shouldColor: boolean
}

export const Star = styled.span<StarProps>`
  color: ${props => props.shouldColor ? "gold" : "gray"};
  font-size: 12px;
`