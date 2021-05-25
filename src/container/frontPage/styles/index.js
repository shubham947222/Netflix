import styled from 'styled-components';

// import { StyledButton } from '../../button/styles/index'
import Banner from '../../../assets/banner.jpg'


export const Wrapper = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;

/* text-align-last:center; */
/* flex-direction:column; */
background: linear-gradient(to bottom,rgba(0,0,0,.7),rgba(0,0,0,.6)),url(${Banner})  center no-repeat;
/* background-repeat:no-repeat; */
background-size: cover;

height:100vh;

`



export const LangWrapper = styled.div`
display: flex;
flex-direction:column;
flex-wrap:wrap;
align-items: center;
justify-content: center;
color: white;
margin-top: -10rem;
/* text-align-last:center; */
h1{
    font-size: 4rem;
}
h2{
    margin-top: -2rem;
    font-size: 1.3rem;
    letter-spacing: 0.2rem;
}
p{
    font-size: 0.85rem;
    letter-spacing: .1rem;
}
@media (max-width:600px){
     
    h1{
    font-size: 2rem;
}
h2{
    margin-top: .5rem;
    font-size: 1rem;
    letter-spacing: 0.2rem;
}
p{
    font-size: 0.5rem;
    letter-spacing: .1rem;
}font-size:1rem;
    }
    @media (max-width: 350px){
        h1{
    font-size: 1.5rem;
}
h2{
    /* margin-top: .5rem; */
    font-size: 1.5rem;
    /* letter-spacing: 0.2rem; */
}
p{
    font-size: 0.8rem;
    /* letter-spacing: .1rem; */
}
    }
`






