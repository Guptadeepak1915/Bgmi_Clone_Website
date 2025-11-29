import React from 'react'
import './Home.css'

const App = () => {
  const heading={
    color:'white',
  }
  return (
     <div>
        <div class="front-photo">
        <div class="text-on-image">
        <div class="heading">
          <h1>INDIA KA BATTLEGROUND</h1>
          </div>
          <div class="stores">
          <div class="Appstore">
           <a href="https://apps.apple.com/in/app/battlegrounds-mobile-india/id1526436837" target="_black"> <p>Download from the <big><b>App Store</b></big></p></a>
          </div>
          <div class="playstore">
            <a href="https://play.google.com/store/apps/details?id=com.pubg.imobile&hl=en-US" target="_black"><p>Download From <big><b>Google Play Store</b></big></p></a>
          </div>
          </div>
          <div className='tags'>
          <p class="tag1">Buy UC At UniPin</p>
            <a href="https://battlegrounds-mobile-india.en.uptodown.com/android" target="_blank">
            <p class="tag2">APK DOWNLOAD</p></a>
          </div>
        </div>
      </div>
      <div class="newsHeading">
      <h2>NEWS</h2>
      </div>
  
      <div class="main-news-div">
          <div class="news-divs">
           <a href="https://www.battlegroundsmobileindia.com/news_view/872"> <img class="news-pics" src="https://www.battlegroundsmobileindia.com/data/board/2/872/Banner_Notice_updated.jpg" alt="Image not found" /></a>
            <p>Notice</p>
              <h4>3.5 Popularity Battle 1v1 Round 4 Exetension</h4>
              <h3>2024-12-03</h3>
           
          </div>
          <div class="news-divs">
            <a href="https://www.battlegroundsmobileindia.com/news_view/873"><img 
             class="news-pics" src="https://www.battlegroundsmobileindia.com/data/board/2/873/3_6_Web_banner.png" alt="not found" /></a>
             <p>Patch notes</p>
              <h4>3.6 Update</h4>
              <h3>2025-01-16</h3>
          </div>
          <div class="news-divs">
            <img src="https://www.battlegroundsmobileindia.com/data/board/2/873/3_6_Web_banner.png" alt="not found" class="news-pics" />
            <p>Notice</p>
              <h4>Motor Cruise Draw Pricing Changes</h4>
              <h3>2025-01-16</h3>
          </div>
      </div>
      <div className='partner-bg-div'>
        <h1>PARTNERS</h1>
        <div class="partner-main-div">
          <div class="partner-div">
            <img src="	https://img.youtube.com/vi/pDjtNMPj8RI/hq720.jpg" alt="not found" class="partner-img" />
            <p>caseeto</p>
            <p>2022-07-14</p>
          </div>
          {/* <div class="partner-div">
            <img src="https://img.youtube.com/vi/WE1EclPONAM/hq720.jpg" alt="not found " class="partner-img" />
            <p>Scout</p>
            <p>2022-07-14</p>
          </div> */}
          <div class="partner-div">
            <img src="	https://img.youtube.com/vi/IJgkB9WiQA8/hq720.jpg" alt="not found" class="partner-img"/>
            <p>Snax Gaming</p>
            <p>2022-07-14</p>
          </div>
          <div class="partner-div">
            <img src="	https://img.youtube.com/vi/sbVZ5IaBPWM/hq720.jpg" alt="not found" class="partner-img"/>
            <p>Creative Pavan</p>
            <p>2022-07-14</p>
          </div>
          <div class="partner-div"><img src="https://img.youtube.com/vi/2iURZ2C1hX0/hq720.jpg" alt="not found" class="partner-img"/>
          <p>Bandook Baaz</p>
            <p>2022-07-14</p>
          </div>
        </div>

      </div>
      <div class='bottom-content'>
        <div class="under-bottom-content">
    
          <img src="https://www.battlegroundsmobileindia.com/common/img/main/app.png" alt="not found" />
          <h2>INDIA KA BATTLEGROUNDS IS HERE
          DOWNLOAD NOW!</h2>
          <div class="stores">
          <div class="Appstore">
           <a href="https://apps.apple.com/in/app/battlegrounds-mobile-india/id1526436837" target="_black"><p>Download from the <big><b>App Store</b></big></p></a>
          </div>
          <div class="playstore">
           <a href="https://play.google.com/store/apps/details?id=com.pubg.imobile&hl=en-US" target="_black"> <p>Download From <big><b>Google Play Store</b></big></p></a>
          </div>
          </div>
        
        </div>
      </div>
       
        <footer>
          <div class="footer-div">
            <img src="https://www.battlegroundsmobileindia.com/common/img/common/logo.png" alt="not found" />
            <p style={{color:"white",marginBottom:"0px",marginTop:"10px"}}>© 2023 KRAFTON, Inc. All rights reserved.</p>
            <ul>
              <a href="https://www.battlegroundsmobileindia.com/privacy"><li>Privacy Policy |</li></a>
              <a href="https://www.battlegroundsmobileindia.com/terms"><li>Terms of Service |</li></a>
              <a href="https://www.battlegroundsmobileindia.com/rules"><li>Rules of Conduct |</li></a>
              <a href="https://www.battlegroundsmobileindia.com/privacy_community"><li>Official Community Policy |</li></a>
              <a href="https://www.battlegroundsmobileindia.com/ccg"><li>Content Creation Guideline |</li></a>
            </ul>
          </div>
        </footer>
     </div>
      
  )
}


export default App
