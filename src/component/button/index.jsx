import React from 'react'

import {StyledButton} from './styles/index'

const ButtonWrapper = (props) => (
   <StyledButton>{props.children}</StyledButton>

)

export default ButtonWrapper;