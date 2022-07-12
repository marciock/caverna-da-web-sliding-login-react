import styled from "styled-components"

export const MenuContainer=styled.div`
     display: flex;
    flex-direction: column; 
    justify-content: baseline;
    width: 50%;
    padding: 10vh 3vw 10vh 3vw;
    color: white;
    
    h2{
        
        font-size: 1rem;
        font-weight: 400;
    }
    p{
        padding-top:1vh;
        font-size: 0.8rem;
        padding-bottom: 1vh;
        font-weight: 200;
    }
`
export const ButtonContainer=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: left;
    
    padding-bottom: 1vh;
`