import './App.css';
import Home from './pages/home';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import TripDetails from './pages/tripDetails';
import Reservation from './pages/reservation';
import AboutUs from './pages/aboutUs';
import Hajj from './pages/hajj';

const FixedIcon = styled.i`
  position: fixed;
  font-size: 50px;
  bottom: 40px;
  right: 40px;
  color: green;
  z-index: 3;
  cursor: pointer;
`;

const Loading = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgb(0 0 0 /80%);
  z-index: 10;
  display: none;
  align-items: center;
  justify-content: center;
  img{
    animation: logo-scale infinite 1.5s linear;
  }
  @keyframes logo-scale {
  0% {
    transform: scale(100%);
  }
  50% {
    transform: scale(110%);
  }
  100% {
    transform: scale(100%);
  }
}
`;

function App() {

  return (
    <>
      <FixedIcon className="fa-brands fa-whatsapp" onClick={()=>window.open("https://wa.me/+4917647002304","_blank")}></FixedIcon>
      <Loading className='loadingBackground'>
        <img src='logo192.png'></img>
      </Loading>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/AboutUs' element={<AboutUs></AboutUs>}></Route>
        <Route path='/TripDetails' element={<TripDetails></TripDetails>}></Route>
        <Route path='/Reservation' element={<Reservation></Reservation>}></Route>
        <Route path='/Hajj2026' element={<Hajj></Hajj>}></Route>
      </Routes>
    </>
  );
}

export default App;
