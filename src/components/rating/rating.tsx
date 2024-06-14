import { Star } from "./styles"

const MAX_STARS_RATING = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

interface RatingProps {
  rating: number
}

export const RatingStars = (props: RatingProps) =>  {
  const { rating } = props

  return (
    <div>
      {MAX_STARS_RATING.map((star) => {
        return (
          <Star key={star} shouldColor={rating >= star}>
            {' '}★{' '}
          </Star>
        )
      })}
    </div>
  )
}