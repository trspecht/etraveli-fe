import styled from "styled-components"

interface SpinnerProps {
  size: number
}

export const Spinner = (props: SpinnerProps) => {
  const { size } = props

  return <RoundSpinner size={size} />
}

const RoundSpinner = styled.div<SpinnerProps>`
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  position: absolute;
  left: 50%;
  top: 20%;
  height: ${(props) => (props.size)}px;
  width: ${(props) => (props.size)}px;
  border: 8px solid gray;
  border-top: 8px solid black;
  border-radius: 50%;
  animation: spinner 1.5s linear infinite;
  margin: 16px;
`
