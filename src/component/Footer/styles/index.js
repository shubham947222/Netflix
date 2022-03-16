import styled from 'styled-components'

export const Wrapper = styled.div`

display: flex;
flex-direction: column;
background-color:black;

`
export const InnerWrapper = styled.div`
display: flex;
justify-content: space-evenly ;
align-items: center;
flex-wrap: wrap;


font-size:1rem;
text-decoration: none;

a{
    text-decoration: none;
    color: #757575;
    list-style-type:none;
    margin:1rem;

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
}

`

export const OptWrapper = styled.div`
display: flex;
flex-wrap: wrap;


`
export const QueWrapper = styled.div`
display: flex;
flex-wrap: wrap;
margin-top:2rem;
color: #757575;
margin-left:16rem;
@media(min-width:450px){
    margin-left: 2rem;
  
}
@media(min-width:240px){

    margin-left: 3rem;
     
}
`


