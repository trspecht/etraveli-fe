import styled from "styled-components";
import colors from "../constants/colors";

export const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
`

export const Container = styled.div`
  display: flex;
  height: 100%;
`

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`

export const SeparatorH = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${colors.gray_secondary};
`

export const SeparatorV = styled.div`
  width: 1px;
  background-color: ${colors.gray_secondary};
`