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
@media (max-width:770px){
    width:6rem;
   height: 2.5rem;
   font-size:1rem;
    }
   @media (max-width:650px){
      width:5rem;
      font-size:.9rem;
      height:2.4rem ;

      }
      @media (max-width: 450px){
      width:3.7rem;
      height:2.4rem ;
      font-size:.9rem;
     }
    @media (max-width: 370px){
      width:5rem;
      height:2.3rem ;
      font-size:.9rem;
      /* font-weight: 300; */
     }
`;


export const Input = styled.input`
  width: 31rem;
  height: 3.5rem; 
  margin-right: 5rem;
  margin-bottom:3rem;
  @media (max-width:770px){
    width:18rem;
   height: 2rem;
    }
  @media (max-width:650px){
    width:20rem;
   height: 1.9rem;
    }
    @media (max-width:450px){
    width:18rem;
   height: 1.99rem;
    }
    
    @media (max-width: 370px){
    width:13rem;
    
      
    }
`
