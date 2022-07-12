import styled from "styled-components"

import { IThemes } from "./ButtonLogin.interface"
import { theme } from "../../theme"

type key = "colored" | "outline"

const getTheme = (keyTheme: key) => {
  return theme[keyTheme]
}

export const ButtonLogin = styled.button<IThemes>`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 0.5rem 0.8rem 0.5rem 0.8rem;

  color: ${(props) => getTheme(props.theme).light};
  font-size: 1rem;
  font-weight: 500;

  background-color: ${(props) => getTheme(props.theme).backgroundColor};
  border-radius: 5px;
  border-color: ${(props) =>
    props.theme === "colored"
      ? getTheme(props.theme).middle
      : getTheme(props.theme).light};

  cursor: pointer;
`
