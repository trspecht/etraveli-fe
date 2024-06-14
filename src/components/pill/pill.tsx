import { RatingPill } from "./styles"

interface PillProps {
  text: string
}

export const Pill = (props: PillProps) => {
  const { text } = props

  return (
      <RatingPill>{text}</RatingPill>
  )
}