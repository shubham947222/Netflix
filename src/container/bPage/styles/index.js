import styled from 'styled-components';
import Tvimg from '../../../assets/kids.png'
import BoxShot from '../../../assets/boxshot.png'

export const Wrapper = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
height:100vh;
background-color: black;

`
export const FirstWrapper = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-items: center;
height: 50vh;
width: 100vw;




`

export const SecondWrapper = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-items: center;
height: 50vh;
width: 100vw;

text-align-last:center;


`
export const L1Side = styled.div`
display: flex;
flex-direction:column;
flex-wrap:wrap;
text-align-last:center;
align-items: center;
justify-content: center;
width: 50vw;
color: white;
/* background-image:url(${BoxShot}) ; */

h1{
    font-size: 3rem;
}
h2{
    font-size: 1.5rem;
    margin-left: 5rem;
  
}
@media (max-width:850px){
     
     h1{
     font-size: 2rem;
 }
 h2{
     font-size:1rem ;
 }
}
@media (max-width:600px){
     
     h1{
     font-size: 1.5rem;
 }
 h2{
     /* margin-top: .5rem; */
     font-size: .8rem;
     /* letter-spacing: 0.2rem; */
 }
 
}
     @media (max-width: 350px){
       width:4rem;
     font-size:.8rem;
     }
`
export const R1Side = styled.div`

background-repeat:no-repeat;
background-size:25rem;
display: flex;

align-content: center;
justify-content: center;
background-size:500px;
width: 50vw;

img{
    width:25rem;
  @media(max-width:650px){
    width: 18rem;
  }
  @media(max-width:450px){
    width: 12.5rem;
  }
  @media(max-width:450px){
    width: 11rem;
  }
}

`


export const R2Side = styled.div`
background-repeat:no-repeat;
background-size:25rem;
display: flex;
align-content: center;
justify-content: center;
width: 50vw;
img{
    width:25rem;
  @media(max-width:650px){
    width: 18rem;
  }
  @media(max-width:450px){
    width: 12.5rem;
  }
  @media(max-width:450px){
    width: 11rem;
  }
}


`


export const L2Side = styled.div`

display: flex;
flex-direction:column;
align-items: center;
justify-content: center;
width: 50vw;
color: white;
h1{
    font-size: 3rem;
}
h2{
    font-size: 1.5rem;
}
@media (max-width:850px){
     
     h1{
     font-size: 2rem;
 }
 h2{
     font-size:1rem ;
 }
}
@media (max-width:600px){
     
     h1{
     font-size: 1.5rem;
 }
 h2{
     /* margin-top: .5rem; */
     font-size: .8rem;
     /* letter-spacing: 0.2rem; */
 }
 
}
     @media (max-width: 350px){
       width:4rem;
     font-size:.8rem;
     }
/* background-image:url(${Tvimg}) ; */

`
