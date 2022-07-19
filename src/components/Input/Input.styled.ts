import styled from "styled-components"

export const InputConatiner=styled.div`
    display: flex;
    flex-direction:column;
    padding-bottom: 0.5rem;
    width: 100%;
`

export const Label=styled.label`
    font-size: 0.6rem;
    font-weight: 600;


`
export const InputType=styled.input`
        border: none;
        border-bottom: 2px solid ;
        background-color:transparent;

        :focus{
            outline: none;
        }
        ::placeholder{
            font-size: 0.6rem;
        }

        
`