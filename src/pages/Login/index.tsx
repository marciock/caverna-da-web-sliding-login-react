import React, { useState } from "react"

import * as S from "./Login.styled"

import { MenuOption } from "../../components/MenuOption"
import { SlidingPannel } from "../../components/SlidingPannel"

export const Login = () => {
  const signUp = {
    button: "Sing Up",
    title: "Velit mollit dolore laborum cupidatat ut dolor ea velit?",
    body: "Dolore ex et nisi ut eu ad duis. Fugiat fugiat est sunt ex mollit sint. ",
  }
  const sigIn = {
    button: "Sign In",
    title: "Non commodo nisi aliquip pariatur ?",
    body: "Non eu amet anim ullamco ad ex. Esse non duis aliquip ipsum nostrud anim minim aliquip reprehenderit mollit id exercitation. ",
  }

  const [menuOptions, setMenuOptions] = useState<string>("singin")

  const handleActionMenu = (event: string) => {
    setMenuOptions(event)
  }

  return (
    <S.LoginContainer>
      <SlidingPannel position={menuOptions} />
      <S.LoginPannel>
        <MenuOption action={() => handleActionMenu("signin")} option={signUp} />
        <MenuOption action={() => handleActionMenu("signup")} option={sigIn} />
      </S.LoginPannel>
    </S.LoginContainer>
  )
}
//Dont Have an Count?
