import { useDispatch } from "react-redux"
import { Container, InnerContainer, Input } from "./styles"
import { ChangeEvent } from "react"
import { setSearchInput } from "../../store/reducers/movies"

export const SearchBar = () => {
  const dispatch = useDispatch()

  const handleInputChange = (input: ChangeEvent<HTMLInputElement>) => {
    const inputValue = input.target.value
    dispatch(setSearchInput(inputValue))
  }

  return (
    <Container>
      <InnerContainer>
        <Input onChange={(input) => handleInputChange(input)}/>
      </InnerContainer>
    </Container>
  )
}