import styled from 'styled-components'


export const Wrapper = styled.div`
display:flex;

`
export const ButtonWrapper =styled.button`
background-color:red;
color: white;
cursor: pointer;
width: 14rem;
margin-left:-5rem;
margin-bottom:3rem;

font-size:1.7rem;
   @media (max-width:600px){
      width:5rem;
      font-size:.9rem;
      height:2.4rem ;

      }
      @media (max-width: 450px){
      width:4rem;
      height:2.4rem ;
      font-size:.9rem;
     }
    @media (max-width: 350px){
      width:4rem;
      height:2.4rem ;
      font-size:.9rem;
     }
`;


export const Input = styled.input`
  width: 31rem;
  height: 3.5rem; 
  margin-right: 5rem;
  margin-bottom:3rem;
  @media (max-width:600px){
    width:20rem;
   height: 1.9rem;
   
    }
    @media (max-width: 385px){
    width:10rem;
    
      
    }
`
