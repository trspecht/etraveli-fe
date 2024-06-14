import { Button } from "../button/button"
import { SearchBar } from "../search/search-bar"
import { Container } from "./styles"

export const TopBar = () => {

  return (
    <Container>
      <Button title={"Sort by..."} />
      <SearchBar />
  </Container>
  )
}
