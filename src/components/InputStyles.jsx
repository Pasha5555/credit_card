/* eslint-disable no-nested-ternary */
import styled from 'styled-components';

const BaseInput = styled.input`
  background-color: rgb(122, 122, 255);
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
  color: #fff;
  appearance: none;
  text-align-last: center;
  outline: none;
  border: ${props => (props.emptyInput
    ? '2px solid transparent'
    : props.border
      ? '2px solid rgb(146, 221, 146)'
      : '2px solid rgb(255, 68, 68)')};
  box-shadow: ${props => (props.emptyInput
    ? '0px'
    : props.boxShadow
      ? '0 0 5px rgb(146, 221, 146)'
      : '0 0 5px rgb(255, 68, 68)')};

    hhggfhg
`;

export const InputNumber = styled(BaseInput)`
  height: 35px;
  width: 300px;
  margin-right: 120px;
`;

export const InputCVV = styled(BaseInput)`
  height: 30px;
  width: 80px;
`;

export const InputDate = styled(BaseInput)`
  height: 30px;
  width: 150px;
`;
