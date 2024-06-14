import strings from "../../constants/strings"
import { RatingStars } from "../rating/rating"
import { Date, Item, Text } from "./styles"

interface MovieItemProps {
  isSelected: boolean
  episode: number
  title: string
  rating?: number
  releaseDate: Date
  onRowClick: () => void
}

export const MovieItem = (props: MovieItemProps) => {
  const { isSelected, episode, title, rating, releaseDate, onRowClick } = props

  return (
    <Item selected={isSelected} onClick={onRowClick}>
      <Text>{strings.episode + episode.toString()}</Text>
      <Text>{title}</Text>
      {rating && <RatingStars rating={rating/10} />}
      <Date>{releaseDate.toString()}</Date>
    </Item>
  )
}