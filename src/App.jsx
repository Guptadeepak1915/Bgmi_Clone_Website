import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from '/src/components/Home.jsx'
import News from '/src/components/News.jsx'
const App = () => {
  return (
    <div class="main-div">
      <div class='nav-div'>
      <Router>
      <nav class='nav-elements'>
        <div><img src="https://www.battlegroundsmobileindia.com/common/img/common/logo.png" alt="not found" /></div>
        <span><Link to='/' class="link">HOME</Link></span>
        <span><Link to='news' class="link">NEWS</Link></span>
        <span><Link to='redeem' class="link">REDEEM</Link></span>
        <span><Link to='esports'class="link">ESPORTS</Link></span>
        <span><Link to ='support'class="link">SUPPORT</Link></span>
        <span><Link to='game' class="link">GAME RESPONSIBLY</Link></span>
        <div class='logo-div'>
          <img src="https://www.battlegroundsmobileindia.com/common/img/btn/sns_d_w.png" alt="not found" />
          <a href="https://www.facebook.com/BattlegroundsMobileIN/"><img src="https://www.battlegroundsmobileindia.com/common/img/btn/sns_f_w.png" alt="not found" /></a>
          <a href="https://www.instagram.com/battlegroundsmobilein_official/"><img src="https://www.battlegroundsmobileindia.com/common/img/btn/sns_i_w.png" alt="not found" /></a>
          <a href="https://www.youtube.com/c/BattlegroundsMobile_IN"> <img src="https://www.battlegroundsmobileindia.com/common/img/btn/sns_y_w.png" alt="not found" /></a>
        </div>
        <div class='download-div'>
          <p class="ios">IOS Download</p>
          <p class="android">Android Downloads</p>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='news' element={<News/>}/>
      </Routes>
      </Router>
    </div>

    </div>
      )
}

export default App
