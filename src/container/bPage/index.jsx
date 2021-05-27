import React from 'react'
import { Wrapper,FirstWrapper,SecondWrapper,InnerWrapper,Img} from './styles/index'
import Sad from "../../assets/tv.png"
import Line from '../../component/line/index'
import Img1 from '../../assets/img1.jpg'
import Img2 from '../../assets/img2.jpg'
const BPage = () =>(
    <>
    
    <Wrapper>
        <Line/>
         <FirstWrapper>
             <InnerWrapper>
                  <h1>Enjoy on your TV.</h1>
             <h2>Watch on smart TVs, PlayStation, Xbox,<br/> Chromecast, Apple TV, Blu-ray players and <br/>more.</h2>
             </InnerWrapper>
             <Img><img width="400px"src={Img1} alt="img1"/>   </Img>
                       
        </FirstWrapper>
        <Line/>
         <SecondWrapper>
             <Img>
              <img width="400px"src={Img2} alt="img1" /> 
             </Img>
                      
         <InnerWrapper>
         <h1>Enjoy on your TV.</h1>
             <h2>Watch on smart TVs, PlayStation, Xbox,<br/> Chromecast, Apple TV, Blu-ray players and <br/>more.</h2>
         </InnerWrapper>  
         </SecondWrapper>
         <Line/>
         
     </Wrapper>
     </>
)
export default BPage;
