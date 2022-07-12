import styled from "styled-components"

interface IPropMove{
    animation:string
}

export const SlideContainer=styled.div<IPropMove>`

    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 2;
    width: 35vw;
    height: 60vh;
    left:51vw;
    animation: ${props=>props.animation} 1s forwards;
    box-shadow: 5px 5px 5px rgba(0,0,0,0.5);

    @keyframes  signup{
        0%{left:13vw;}
      
        100%{ left:51vw;}
        
    }

    @keyframes  signin{
        0%{left:51vw;}
        
        100%{ left:13vw;}
        
    }


    background-color: white;



`