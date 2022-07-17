import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop-page/shop-page.component';

function App() {
  return (
    <div>
        <Routes>
          <Route path='/vipman-clothing' element={<Homepage/>}/>
          <Route path='/vipman-clothing/shop' element={<ShopPage/>}/>
        </Routes>
    </div>
  )
}

export default App
