import styled from 'styled-components';

export const InputNumber = styled.input`
    background-color: rgb(122, 122, 255);
    border: ${ props => props.emptyInput 
        ? '2px solid transparent' 
        : props.border 
            ? '2px solid rgb(146, 221, 146)' 
            : '2px solid rgb(255, 68, 68)'};
    height: 35px;
    width: 300px;
    margin-right: 120px;
    font-family: "Roboto", sans-serif;
    color: #fff; 
    text-align-last: center;
    font-size: 1.4rem;  
    box-shadow: ${ props => props.emptyInput 
        ? '0px' 
        : props.boxShadow 
            ? '0 0 5px rgb(146, 221, 146)'
            : '0 0 5px rgb(255, 68, 68)'};
    outline: none;
`;

export const InputCVV = styled.input`
    background-color: rgb(122, 122, 255);
    height: 30px;
    width: 80px;
    text-align-last: center;
    color: rgb(189, 189, 252);
    font-family: "Roboto", sans-serif;
    appearance: none;
    font-size: 1.2rem;
    border: ${ props => props.emptyInput 
        ? '2px solid transparent' 
        : props.border 
            ? '2px solid rgb(146, 221, 146)' 
            :'2px solid rgb(255, 68, 68)'};
    box-shadow: ${ props => props.emptyInput
        ? '0px' 
        : props.boxShadow 
            ? '0 0 5px rgb(146, 221, 146)' 
            :'0 0 5px rgb(255, 68, 68)'};
    outline: none;
`;

export const InputDate = styled.input`
    background-color: rgb(122, 122, 255);
    height: 30px;
    color: rgb(189, 189, 252);
    font-family: "Roboto", sans-serif;
    appearance: none;
    text-align-last: center;
    font-size: 1.2rem;
    width: 150px;
    color: #fff; 
    border: ${ props => props.emptyInput || props.border === null 
        ? '2px solid transparent' 
        : props.border 
            ? '2px solid rgb(146, 221, 146)' 
            :'2px solid rgb(255, 68, 68)'};
    box-shadow: ${ props => props.emptyInput || props.border === null 
        ? '0px' 
        : props.boxShadow 
            ? '0 0 5px rgb(146, 221, 146)' 
            :'0 0 5px rgb(255, 68, 68)'};
    outline: none;
`;