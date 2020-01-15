import React from 'react';

import StyledButton from '../Elements/StyledButton';

const Button = (props) => {
    return (
        <StyledButton
            green={props.green}
            onClick={props.onClick}
        >
            {props.children}
        </StyledButton>
    )
}

export default Button;