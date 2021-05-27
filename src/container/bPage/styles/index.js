import styled from 'styled-components';


export const Wrapper = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
/* height:100vh; */
background-color: black;


`
export const FirstWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content:space-evenly;
align-items: center;
text-align-last:center;
height: 50vh;
width: 100vw;
color: white;

@media(max-width:850px){
flex-direction:column;
img{
      background-size: 1rem;
      size: 1rem;
    }
}
@media(max-width:600px){
    flex-direction:column;
    img{
      background-size: 1rem;
      size: 1rem;
    }
}
@media(max-width:450px){
    flex-direction:column;
    /* color: red; */
    margin-top: 2rem;
    img{
      background-size: 1rem;
      size: 1rem;
      margin: 1rem;
    }
}

`
export const SecondWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content:space-evenly;
align-items: center;
text-align-last:center;
height: 50vh;
width: 100vw;
color: white;

@media(max-width:850px){
  flex-direction:column-reverse;
/* color: blue; */
}
@media(max-width:600px){
  flex-direction:column-reverse;
    /* color: red; */
}
@media(max-width:450px){
    flex-direction:column-reverse;
}


`
export const InnerWrapper = styled.div`
@media(max-width:850px){
h1{

}
h2{

}
}
@media(max-width:600px){
    
}
@media(max-width:450px){
   h1{
font-size: 1.5rem;
}
h2{
  font-size: 1rem;
}
}
`
export const Img = styled.div`
@media(max-width:450px){
img{
  width: 18rem;
}

}
`
