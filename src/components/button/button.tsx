import { Container } from "./styles"

interface ButtonProps {
  title: string
}

export const Button = (props: ButtonProps) => {
  const { title } = props


  return (
    <Container>
      {title}
    </Container>
  )
}