import styled from 'styled-components';

export const AltButton = styled.button`
    width: 200px;
    height: 100px;
    background-color: red;
`;

export const SubmitButton = styled.button`
    width: 200px;
    height: 100px;
    background-color: green;
`;

export const DangerText = styled.h1`
    font-weight:bold;
    color: red;
    font-size: 2rem;
`;

export const SuccessText = styled.h1`
    font-weight:bold;
    color: green;
    font-size: 2rem;
`;

export const Text = styled.h1`
    font-weight:bold;
    color: ${(props) => props.color};
    font-size: 2rem;
`;
