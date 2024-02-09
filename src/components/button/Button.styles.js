import styled from "styled-components";

export const Container = styled.button`
    border: none;
    outline: none;
    background-color: ${props => props.theme.moderateBlue};
    color: ${props => props.theme.white};
    border-radius: 8px;
    width: 100px;
    height: 38px;
    cursor: pointer;
    transition: all 0.13s ease;

    &:hover {
        background-color: ${props => props.theme.lightGrayishBlue};
    }
`;