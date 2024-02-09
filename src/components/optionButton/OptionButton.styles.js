import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: 300;
    cursor: pointer;
    text-transform: capitalize;
    transition: all 0.13s ease;

    &:hover {
        opacity: 0.7;
    }
`;