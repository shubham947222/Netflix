import React from 'react'
import { Wrapper, L1Side, R1Side,FirstWrapper,SecondWrapper,R2Side,L2Side,Img} from './styles/index'
import Sad from "../../assets/tv.png"
import Line from '../../component/line/index'
import Img1 from '../../assets/img1.jpg'
import Img2 from '../../assets/img2.jpg'
const BPage = () =>(
    <>
    
   <Wrapper>
       <Line/>
        <FirstWrapper>
            <L1Side >
                <h1>Enjoy on your TV.</h1>
                <h2>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h2>
            </L1Side> 
             <Line/>
            <R1Side>
                <img width="400px"src={Img1} alt="img1" />
            </R1Side>
       </FirstWrapper>
       <Line/>
        <SecondWrapper>
            <R2Side> <img width="400px"src={Img2} alt="img1" /></R2Side>
            <L2Side >
                <h1>Download your shows to watch offline.</h1>
                <h2>Save your favourites easily and always have something to watch.</h2>
            </L2Side> 
            
        </SecondWrapper>
        <Line/>
        
    </Wrapper>
    </>
)
export default BPage;
