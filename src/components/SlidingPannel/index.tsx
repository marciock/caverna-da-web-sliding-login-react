import React from "react"

import * as S from "./SlidingPannel.styled"

interface ISlideProps {
  position: string
}

export const SlidingPannel = ({ position }: ISlideProps) => {
  return <S.SlideContainer animation={position}>{position}</S.SlideContainer>
}
