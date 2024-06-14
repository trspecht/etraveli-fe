import { Description, Title } from "./styles"

interface InfoProps {
  title: string
  description: string
}

export const Info = (props: InfoProps) => {
  const { title, description } = props

    return (
      <>
      <Title>{title}</Title>
      <Description>{description}</Description>
      </>
    )
}