import styled from 'styled-components'


export const Wrapper = styled.div`
display: flex;
flex-direction:column;
align-items: center;
padding-top:4rem;
justify-content: center;
height:100vh;
background-color: black;


`
export const BoxWrapper = styled.div`
display: flex;
position: block;
flex-direction:column;
justify-content: center;

height:100vh;
align-items: center;
h1{
     /* width: 30rem; */
   background-color: #757575;

  
     /* height: 2rem; */
     /* display: block; */
}
@media (max-width:850px){
     
     h1{
     font-size: 1rem;
     }
 
}

@media (max-width:650px){
     
     h1{
     font-size: 1.5rem;
 }
 
 
}
     @media (max-width: 380px){
     /* width: 20rem; */
     /* height: 12rem; */
     font-size:.2rem;
     }
`
export const HeadWrapper = styled.div`
    color: white;
    font-size: 3rem;
    /* text-align-last: center; */
    
    @media (max-width:850px){
     
     h1{
     font-size: 1rem;
     text-align-last: center;
     }
 
}

@media (max-width:650px){
     
     h1{
     font-size: 1.7rem;
     text-align-last: center;
 }
 
 
}
@media (max-width: 415px){
     font-size: 1.7rem;
}
    
     @media (max-width: 380px){
     
     font-size:1.8rem;
     text-align-last: center;
     }
   
 `


export const Drop = styled.div`
    /* color: white;
   
    background-color: #757575;
    font-size: 1.8rem;
    margin:1rem ;
    width: 30rem;
    border: 1px solid black; */
    background-color: #303030; 
    display: flex;
    flex-wrap:wrap;
  color: white;
  cursor: pointer;

  padding: 22px 66px;
  width: 100%;
  border: black solid 3px;
align-items: center;
justify-content: center;
  font-size: 18px;
/* letter-spacing: .2rem; */

    &:hover{
        
        /* display:block; */
        color: red;
    }
    @media (max-width:850px){
     font-size: 1rem;
    }
 @media (max-width:600px){
         font-size: 1rem;
      } 
 @media (max-width:450px){
  width: 75%;
     
     padding: 12px 46px;
     font-size: .8rem;
     
} 
@media (max-width:350px){
     
     
     font-size: .9rem;
  padding: 12px 46px;
  width: 75%;
  


     
}
 
`