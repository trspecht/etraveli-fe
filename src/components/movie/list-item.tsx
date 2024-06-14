import { Item, Text } from "./styles"

interface MovieItemProps {
  isSelected: boolean
  episode: number
  title: string
  rating?: string
  releaseDate: Date
  onRowClick: () => void
}

export const MovieItem = (props: MovieItemProps) => {
  const { isSelected, episode, title, rating, releaseDate, onRowClick } = props

  return (
    <Item selected={isSelected} onClick={onRowClick}>
      <Text>{"EPISODE " + episode.toString()}</Text>
      <Text>{title}</Text>
      <Text>{rating}</Text>
      <Text>{releaseDate.toString()}</Text>
    </Item>
  )
}