import * as S from "./Input.styled"
import { IPropsInput } from "./Input.interface"

export const Input = ({ type, name, placeholder, label }: IPropsInput) => {
  return (
    <S.InputConatiner>
      <S.Label>{label}</S.Label>
      <S.InputType type={type} name={name} placeholder={placeholder} />
    </S.InputConatiner>
  )
}
