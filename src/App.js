import { Routes, Route, Link } from "react-router";
import HomePage from "./Homepage/HomePage";
import Profile from "./profile/Profile";
import Game from "./Game/Game";
import Location from "./Location/Location";
import "./App.css";

function App() {
  return (
    <div>
      <div className="ver-nav-bar">
        <ul className="menu-list">
          <li><a href="/"><i className="fa-solid fa-house"></i></a></li>
          <li><a href="/profile"><i className="fa-solid fa-user"></i></a></li>
          <li><a href="/location"><i class="fa-solid fa-location-dot"></i></a></li>
          <li><a href="/game"><i class="fa-solid fa-gamepad"></i></a></li>
        </ul>
      </div>
     <div className="main-page"> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/game" element={<Game/>}/>
        <Route path="/location" element={<Location/>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
