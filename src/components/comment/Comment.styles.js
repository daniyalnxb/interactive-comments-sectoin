import styled from "styled-components";

export const CommentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const CommentWrapper = styled.div`
    background-color: ${props => props.theme.white};
    border-radius: 8px;
    padding: 20px;
    display: flex;
    gap: 20px;
    position: relative;
`;

export const CommentContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
`;

export const CommentHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;

    img {
        width: 32px;
    }

    .user-name {
        font-weight: 500;
        color: ${props => props.theme.darkBlue};
    }

    .time-ago {
        color: ${props => props.theme.grayishBlue};
    }
`;

export const OptionsContainer = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    display: flex;
    align-items: center;
    gap: 20px;

    .delete {
        color: ${props => props.theme.softRed};
    }

    .reply, .edit {
        color: ${props => props.theme.moderateBlue};
    }
`;

export const CommentBody = styled.div`
    width: 100%;

    .comment-text {
        color: ${props => props.theme.grayishBlue};
    }
`;

export const RepliesContainer = styled.div`
    position: relative;
`;

export const SupportLine = styled.div`
    background-color: ${props => props.theme.lightGray};
    height: 100%;
    width: 1px;
    left: 38px;
    top: 0;
    position: absolute;
    z-index: -1;
`;