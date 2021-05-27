import React from 'react';

import { Wrapper,BoxWrapper,HeadWrapper,Drop } from './styles'
import Emailbar from '../../component/emailBar'
import Line from '../../component/line/index'
const Para = () => (
    <>
    <Wrapper>
        <Line></Line>
      <HeadWrapper>  Frequently Asked Question</HeadWrapper>
        <BoxWrapper>
            {/* <h1 ></h1>
            <h1></h1>
            <h1></h1>
            <h1></h1>
            <h1></h1> */}

         
            <Drop>What is Netflix?</Drop>
            <Drop>How much does Netflix cost?</Drop>
            <Drop>Where can I watch?</Drop>
            <Drop>How do I cancel?</Drop>
            <Drop>What can I watch on Netflix?</Drop>
            <Drop>Is Netflix good for kids?</Drop>
        </BoxWrapper>
       
        <p style={{ color: "white" }}>Ready to watch? Enter your email to create or restart your membership.</p>
        <Emailbar />
        <br></br>
        
    </Wrapper>
    {/* <Br/> */}
    </>
)

export default Para;