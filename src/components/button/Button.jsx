import React from 'react';

import { Container } from './Button.styles';

const Button = ({children}) => {
    return (
        <Container>{children}</Container>
    );
}

export default Button;
