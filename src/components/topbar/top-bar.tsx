import { useState } from "react"
import strings from "../../constants/strings"
import { SearchBar } from "../search/search-bar"
import { Button, Container, Option, Options } from "./styles"
import { useDispatch } from "react-redux"
import { setSortOption } from "../../store/reducers/movies"

export enum SortOptions {
  Date = "release_date",
  Episode = "episode_id"
}

export const TopBar = () => {
  const dispatch = useDispatch()

  const [isSortOpen, setIsSortOpen] = useState<boolean>(false)

  const toggleSortButton = () => setIsSortOpen(!isSortOpen)

  const handleSort = (optionKey: string) => {
    dispatch(setSortOption(optionKey))
  }

  return (
    <Container>
      <Button onClick={toggleSortButton}>
      {strings.sort_by}
      {isSortOpen &&
        <Options>
          {Object.entries(SortOptions).map(([key, value]) =>
            <Option
              key={key}
              onClick={() => handleSort(value)}>
                {key}
            </Option>
          )}
        </Options>
      }
      </Button>
      <SearchBar />
  </Container>
  )
}
