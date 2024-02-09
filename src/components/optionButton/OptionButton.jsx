import React from 'react';

import { Container } from './OptionButton.styles';

const OptionButton = ({ buttonType, Icon, handleClick }) => {
    return (
        <Container className={buttonType} onClick={handleClick}>
            <Icon />
            <p>{buttonType}</p>
        </Container>
    );
}

export default OptionButton;
