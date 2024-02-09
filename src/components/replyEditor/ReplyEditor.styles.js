import styled from "styled-components";

export const Container = styled.div`
    background-color: ${props => props.theme.white};
    border-radius: 8px;
    padding: 20px;
    display: flex;
    gap: 15px;

    textarea {

    }
`;

export const Avatar = styled.img`
    width: 32px;
    height: 32px;
`;