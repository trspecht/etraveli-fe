import _ from "lodash"
import { Rating } from "../../types/movies"
import { AverageRating, Container, Description, Pills, Poster, Title } from "./styles"
import strings from "../../constants/strings"
import { Pill } from "../pill/pill"
import { RatingStars } from "../rating/rating"

interface InfoProps {
  title: string
  description: string
  poster: string
  director: string
  averageRating: number
  ratings: Rating[]
}

export const Info = (props: InfoProps) => {
  const { title, description, poster, director, averageRating, ratings } = props

  const hasMovie = !_.isEmpty(title)
  const hasPosterURL = !_.isEmpty(poster)

  let content = <Description>{strings.no_movie_selected}</Description>
  if (hasMovie) {
    content =
    <>
      <Title>{title}</Title>
      {hasPosterURL && <Poster src={poster} />}
      <Description>{description}</Description>
      <Description>{strings.directed_by + director}</Description>
      <AverageRating>
        <Description>{strings.average_rating}</Description>
        <RatingStars rating={averageRating/10}/>
      </AverageRating>
      <Pills>
        {ratings?.map((rating) =>
          <Pill key={rating.Source} text={rating.Source + ": " + rating.Value}></Pill>
        )}
      </Pills>
    </>
  }

    return (
      <Container>
        {content}
      </Container>
    )
}