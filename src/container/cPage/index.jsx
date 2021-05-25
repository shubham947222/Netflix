import React from 'react'
import { Wrapper, L1Side, R1Side,FirstWrapper,SecondWrapper,R2Side,L2Side } from './styles/index'
import Line from '../../component/line/index'
import Img3 from '../../assets/img3.jpg'
import Img4 from '../../assets/img4.webp'

const BPage = () =>(
    <Wrapper>
       
        <FirstWrapper>
            <L1Side >
                <h1>Watch everywhere.</h1>
                <h2>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h2>
            </L1Side> 
            
            <R1Side> <img width="400px"src={Img3} alt="img3" /></R1Side>
       </FirstWrapper>
       <Line/>
        
        <SecondWrapper>
            <R2Side> <img width="400px"src={Img4} alt="img4" /></R2Side>
            <L2Side >
                <h1>Create profiles for children.</h1>
                <h2>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</h2>
            </L2Side>             
        </SecondWrapper>
        <Line/>

        
    </Wrapper>
)
export default BPage;
