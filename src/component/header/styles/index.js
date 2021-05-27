import styled from 'styled-components'
// import Logo from '../../../assets/netlogo.png'


export const Wrapper = styled.div`
display: flex;
flex-direction:row;
width: 100vw;
height: 5rem;
justify-content: space-between;
position: relative;


`;

export const LeftSide = styled.div`


background-repeat:no-repeat;

 
margin-left:42px;
position: relative;
top: 0;
position: sticky;
height: 50vh; 
img{
    width:10rem;
    @media(max-width:450px){
        width: 6.5rem;
        margin-left:.2rem;
        margin-top:1rem;
    }
    @media(max-width:370px){
        width: 6.5rem;
        margin-left:.2rem;
        margin-top:1rem;
    }
    
    }

`;

