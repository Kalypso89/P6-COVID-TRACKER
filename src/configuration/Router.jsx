import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomeView } from '../components/pages/homePage/HomePage';

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
                <Route path='/' element={<HomeView/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router