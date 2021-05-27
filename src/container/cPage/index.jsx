import React from 'react'
import { Wrapper,FirstWrapper,SecondWrapper,InnerWrapper,Img} from './styles/index'
import Line from '../../component/line/index'
import Img3 from '../../assets/img3.jpg'
import Img4 from '../../assets/img4.webp'

const BPage = () =>(
    <>
    
   <Wrapper>
       {/* <Line/> */}
        <FirstWrapper>
            <InnerWrapper>
                <br/><br/>
                 <h1>Enjoy on your TV.</h1>
            <h2>Watch on smart TVs, PlayStation, Xbox,<br/> Chromecast, Apple TV, Blu-ray players and <br/>more.</h2>
            </InnerWrapper>
            <Img><img width="400px"src={Img3} alt="img1"/>   </Img>
                      
       </FirstWrapper>
       <Line/>
        <SecondWrapper>
            <Img>
             <img width="400px"src={Img4} alt="img1" /> 
            </Img>
                     
        <InnerWrapper>
        <br/>
                 <h1>Enjoy on your TV.</h1>
            <h2>Watch on smart TVs, PlayStation, Xbox,<br/> Chromecast, Apple TV, Blu-ray players and <br/>more.</h2>
        </InnerWrapper>  
        </SecondWrapper>
        <Line/>
        
    </Wrapper>
    </>
)
export default BPage;
