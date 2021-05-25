import React from 'react';

import { Wrapper,BoxWrapper,HeadWrapper, } from './styles'
import Br from './styles'
import Emailbar from '../../component/emailBar'
import Line from '../../component/line/index'
const Para = () => (
    <>
    <Wrapper>
        <Line></Line>
      <HeadWrapper>  Frequently Asked Question</HeadWrapper>
        <BoxWrapper>
            <h1>What is Netflix?</h1>
            <h1>Where can I watch?</h1>
            <h1>How do I cancel?</h1>
            <h1>What can I watch on Netflix?</h1>
            <h1>Is Netflix good for kids?</h1>

         
            {/* <Drop></Drop>
            <Drop>How much does Netflix cost?</Drop>
            <Drop></Drop>
            <Drop></Drop>
            <Drop></Drop>
            <Drop></Drop> */}
        </BoxWrapper>
       
        <p style={{ color: "white" }}>Ready to watch? Enter your email to create or restart your membership.</p>
        <Emailbar />
        <br></br>
        
    </Wrapper>
    {/* <Br/> */}
    </>
)

export default Para;