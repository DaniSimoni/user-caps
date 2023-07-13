import styled from "styled-components"


export const InputGroup = styled.div`
display: flex;
width: 100%;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 0.5px;
color: ${({$color}) => { return $color === 'danger' ? '#BE2E2E' : '#5281DC'}};
`
export const Label = styled.label`
display: flex;
align-items: flex-start;
gap: 10px;
align-self: stretch;
color: #5281DC;
font-size: 0.75rem;
font-style: normal;
font-weight: 400;
line-height: normal;
color: ${({$color}) => { return $color === 'danger' ? '#BE2E2E' : '#5281DC'}};
`
export const Input = styled.input`
display: flex;
padding: 8px;
align-items: flex-start;
align-self: stretch;
border-radius: 5px;
border: 1px solid #5281DC;
width: 100%;
color: ${({$color}) => { return $color === 'danger' ? '#BE2E2E' : '#5281DC'}};
`
export const TextArea = styled.textarea`
display: flex;
padding: 8px;
align-items: flex-start;
align-self: stretch;
border-radius: 5px;
border: 1px solid #5281DC;
color: ${({$color}) => { return $color === 'danger' ? '#BE2E2E' : '#5281DC'}};
`

export const InputContainer = styled.div`
    position: relative;
    width: 100%;
    
`

export const Icon = styled.button`
    position: absolute;
    top: 0.7rem;
    right: 1rem;
    border: none;
    background-color: transparent;

    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    color: ${({$color}) => { return $color === 'danger' ? '#BE2E2E' : '#5281DC'}};
`