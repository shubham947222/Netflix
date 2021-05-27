import styled from 'styled-components';

// import { StyledButton } from '../../button/styles/index'
import Banner from '../../../assets/banner.jpg'


export const Wrapper = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
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

h1{
    font-size: 4rem;
text-align-last:center;

}
h2{
    margin-top: -2rem;
    font-size: 1.3rem;
    letter-spacing: 0.2rem;
}
p{
    font-size: 0.85rem;
    letter-spacing: .1rem;
    text-align-last:center;

}
 @media (max-width:600px){
     
    h1{
    font-size: 2rem;
    
    }

    h2{
        margin-top: .5rem;
        font-size: 1rem;
        letter-spacing: 0.1rem;
    }

    p{
        font-size: 0.5rem;
        letter-spacing: .01rem;
        font-size:.8rem;
    }

 }
 @media (max-width:420px){
        p{
            
            letter-spacing: .01rem;
            font-size:.6rem;
            font-weight: 800;
        }
    }
    @media (max-width: 350px){
       
     h1{
    font-size: 1.5rem;
    }

    h2{
        /* margin-top: .5rem; */
        font-size: 1rem;
        /* color: blue; */
        /* letter-spacing: 0.2rem; */
    }

    p{
        font-size: 0.8rem;
        /* letter-spacing: .1rem; */
    }
}
`






