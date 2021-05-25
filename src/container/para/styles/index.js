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
flex-direction:column;
justify-content: center;
background-repeat:no-repeat;
background-size: cover;
height:100vh;
align-items: center;
color: white;
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
     @media (max-width: 350px){
     
     font-size:.2rem;
     }
`
export const HeadWrapper = styled.div`
    color: white;
    font-size: 3rem;
    
    @media (max-width:850px){
     
     h1{
     font-size: 1rem;
     }
 
}

@media (max-width:650px){
     
     h1{
     font-size: 1.7rem;
 }
 
 
}
     @media (max-width: 350px){
     
     font-size:1.5rem;
     }
   
 `


// export const Drop = styled.div`
//     color: white;
//     font-size: 2rem;
//     margin:1rem ;
//     &:hover{
        
//         display:block;
//         color: red;
//     }
//     @media (max-width:850px){
     
//      h2{
//      font-size: 1rem;
//      }

 
// }
// @media (max-width:600px){
     
//      h2{
//      font-size: 1rem;
//      }
 
// }
// @media (max-width:450px){
     
//      h2{
//      font-size: 1rem;
//      }
// }
// @media (max-width:350px){
     
//      h2{
//      font-size: .1rem;
//      }
// }
//  `

//  export const Br = styled.div`
//  margin-top:2rem;
//  `