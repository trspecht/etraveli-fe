import { useDispatch } from "react-redux"
import { Container, Icon, InnerContainer, Input } from "./styles"
import { ChangeEvent } from "react"
import { setSearchInput } from "../../store/reducers/movies"
import strings from "../../constants/strings"
import searchIcon from '../../assets/magnifying-glass-solid.svg'

export const SearchBar = () => {
  const dispatch = useDispatch()

  const handleInputChange = (input: ChangeEvent<HTMLInputElement>) => {
    const inputValue = input.target.value
    dispatch(setSearchInput(inputValue))
  }

  return (
    <Container>
      <InnerContainer>
        <Icon src={searchIcon}/>
        <Input onChange={(input) => handleInputChange(input)} placeholder={strings.type_to_filter}/>
      </InnerContainer>
    </Container>
  )
}