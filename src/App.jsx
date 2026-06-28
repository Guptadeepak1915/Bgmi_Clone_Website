import React from 'react'
import './App.css'
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from '/src/components/Home.jsx'
import News from '/src/components/News.jsx'
const App = () => {
  return (
    <div className="main-div">
      <div className='nav-div'>
      <Router >
      <nav className='nav-elements'>
        <div><img src="https://www.battlegroundsmobileindia.com/common/img/common/logo.png" alt="not found" /></div>
        <span><Link to='/' className="link">HOME</Link></span>
        <span><Link to='/news' className="link">NEWS</Link></span>
        <span><Link to='/redeem' className="link">REDEEM</Link></span>
        <span><Link to='/esports'className="link">ESPORTS</Link></span>
        <span><Link to ='/support'className="link">SUPPORT</Link></span>
        <span><Link to='/game' className="link">GAME RESPONSIBLY</Link></span>
        <div className='logo-div'>
          <img src="https://www.battlegroundsmobileindia.com/common/img/btn/sns_d_w.png" alt="not found" />
          <a href="https://www.facebook.com/BattlegroundsMobileIN/"><img src="https://www.battlegroundsmobileindia.com/common/img/btn/sns_f_w.png" alt="not found" /></a>
          <a href="https://www.instagram.com/battlegroundsmobilein_official/"><img src="https://www.battlegroundsmobileindia.com/common/img/btn/sns_i_w.png" alt="not found" /></a>
          <a href="https://www.youtube.com/c/BattlegroundsMobile_IN"> <img src="https://www.battlegroundsmobileindia.com/common/img/btn/sns_y_w.png" alt="not found" /></a>
        </div>
        <div className='download-div'>
          <p className="ios">IOS &#11015;</p>
          <p className="android">Android &#11015;</p>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/news' element={<News/>}/>
      </Routes>
      </Router>
    </div>

    </div>
      )
}

export default App
