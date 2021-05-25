import { React } from 'react'
import{ Wrapper, LangWrapper, } from './styles/index'
import EmailBar from '../../component/emailBar/index'
import Header from '../../component/header/index'
const FrontPage = () =>{
    return(
        <>
      
        <Wrapper>
            <Header></Header>
            <LangWrapper>
               <h1>Unlimited movies, TV 
                   <br/>shows and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
               <EmailBar/>
            </LangWrapper>
          
         </Wrapper>
          
          </>
    )
}
   
export default FrontPage;
