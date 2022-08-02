import React from "react"

import * as S from "./SlidingPannel.styled"

import { Input } from "../Input"
// import { ButtonLogin } from "../ButtonLogin"

interface ISlideProps {
  //  position: string
}

export const SlidingPannel = ({ position }: ISlideProps) => {
  return (
    <S.SlideContainer animation={position}>
      <form>
        <S.FormPannelContainer>
          {position === "signin" ? (
            <>
              <Input type="text" placeholder="USer" name="user" label="User" />
              <Input
                type="password"
                placeholder="password"
                name="password"
                label="Password"
              />
            </>
          ) : (
            <Input type="text" placeholder="Name" name="name" label="Name" />
          )}
          <S.FooterPannelContainer></S.FooterPannelContainer>
        </S.FormPannelContainer>
      </form>

      {position}
    </S.SlideContainer>
  )
}
