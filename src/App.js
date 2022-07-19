import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop-page/shop-page.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

function App() {
  return (
    <div>
        <Header/>
        <Routes>
          <Route path='/vipman-clothing' element={<Homepage/>}/>
          <Route path='/vipman-clothing/shop' element={<ShopPage/>}/>
          <Route path='/vipman-clothing/sign-in-and-sign-up' element={<SignInAndSignUp/>}/>
        </Routes>
    </div>
  )
}

export default App
