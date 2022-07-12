import styled from "styled-components"

import background from '../../assets/background.jpg'


export const LoginContainer=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    width: 100vw;
    height: 100vh;
    /* padding: 2vw 2vh 2vh 2vw; */

    background-image: url(${background});
`
export const LoginPannel=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    width: 80vw;
    height: 50vh;
    padding: 1vw 1vh 1vh 1vw;

    background-color: black ;
    opacity: 0.7;

    color:white;
`