import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from '../components/pages/homePage/HomePage';
import { Tracker1Page } from '../components/pages/tracker1/Tracker1Page';
import { Tracker2Page } from '../components/pages/tracker2/Tracker2Page';
import { Tracker3Page } from '../components/pages/tracker3/Tracker3Page';

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
                <Route path='/' element={<HomePage/>}></Route>
                <Route path='/tracker1' element={<Tracker1Page/>}></Route>
                <Route path='/tracker2' element={<Tracker2Page/>}></Route>
                <Route path='/tracker3' element={<Tracker3Page/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router