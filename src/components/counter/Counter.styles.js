import styled from "styled-components";

export const Container = styled.div`
    padding: 10px;
    border-radius: 8px;
    background-color: ${props => props.theme.verLightGray};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    height: max-content;

    svg {
        cursor: pointer;
    }
`;

export const VoteCount = styled.p`
    color: ${props => props.theme.moderateBlue};
    font-weight: 500;
`;