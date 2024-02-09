import React from 'react';

import { ReactComponent as PlusIcon } from '../../assets/icons/icon-plus.svg';
import { ReactComponent as MinusIcon } from '../../assets/icons/icon-minus.svg';

import { Container, VoteCount } from './Counter.styles';

const Counter = () => {
    return (
        <Container>
            <PlusIcon/>
            <VoteCount>12</VoteCount>
            <MinusIcon />
        </Container>
    );
};

export default Counter;
