import * as S from "./MenuOption.styled"
import { IProps } from "./MenuOption.interface"
import { ButtonLogin } from "../ButtonLogin"

export const MenuOption = ({ action, option }: IProps) => {
  return (
    <S.MenuContainer>
      <h2>{option.title}</h2>
      <p>{option.body}</p>
      <S.ButtonContainer>
        <ButtonLogin type="button" theme="outline" onClick={() => action()}>
          {option.button}
        </ButtonLogin>
      </S.ButtonContainer>
    </S.MenuContainer>
  )
}
