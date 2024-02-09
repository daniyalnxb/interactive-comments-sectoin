import React from 'react';

import avatar from '../../assets/avatars/image-juliusomo.png';
import { Container, Avatar } from './ReplyEditor.styles';
import Button from '../button/Button';

const ReplyEditor = () => {
    return (
        <Container>
            <Avatar src={avatar} />
            <textarea rows="3"></textarea>
            <Button>Reply</Button>
        </Container>
    );
}

export default ReplyEditor;
