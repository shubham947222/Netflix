import React from 'react'


import {Input,Wrapper,ButtonWrapper  } from './styles/index'
// import ButtonWrapper from '../button/index'
const EmailBar = ( ) => (
    <Wrapper>    
        <Input placeholder='Email Address'></Input>
        <ButtonWrapper className="button">Get Started</ButtonWrapper>
   </Wrapper>

)

export default EmailBar;