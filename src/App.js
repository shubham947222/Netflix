import React from 'react'


import FrontPage from '../src/container/frontPage/index'
import BPage from './container/bPage';
import CPage from './container/cPage';
import GlobalStyle from '../src/globalStyles';
import Footer from './component/Footer/index';
import Para from '../src/container/para/index';
import DropDown from '../src/component/dropDown/index'

function App() {
  return (
    <>
    <GlobalStyle/>
    <FrontPage></FrontPage>
    <BPage></BPage>
    <CPage></CPage>
    <Para/>
    <Footer/>
    {/* <DropDown/> */}
  </>
  );
}
// module.export = App;
export default App;
