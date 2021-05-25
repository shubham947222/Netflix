import React  from 'react'
import {Wrapper,LeftSide,} from './styles/index';
import ButtonWrapper from '../button/index';
import Logo from '../../assets/netlogo.png';



const Header = () => (

    <Wrapper>
       
        <LeftSide >
             <img src={(Logo)} alt="Logo" />
            </LeftSide> 
        <ButtonWrapper>SignIn</ButtonWrapper>
           
       
    </Wrapper>
)

export default Header;
