import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <nav className='menu-toggle'>
        <div className='menu-toggle'>
          <span className='menu-icon'></span>
        </div>
        <ul className='menu-list'>
          <li className='option'>Twitter</li>
          <li className='option'>Reddit</li>
          <li className='option'>Blog</li>
          <li className='option'>Newsletter</li>
        </ul>
      </nav>
      <div>
        <a href="https://duckduckgo.com/" target="_blank">
          <img src='./duckduckgologo.svg' className="logo react" alt="React logo" />
        </a>
      </div>
      <input type="text" placeholder="Search the web without being tracked" className="input"/>
      <input type="submit" className="submit" img='search'/>
      <h1>Tired of being tracked online? We can help.</h1>
      <h3>Add DuckDuckGo Privacy Essentials to your browser for free with one download:</h3>
      <ul className='ul benefits'>
        <li>DuckDuckGo Search</li>
        <li>Tracker Blocking</li>
        <li>Site Encryption</li>
      </ul>
      <button type='submit' className='btn Add'>Add DuckDuckGo to Brave</button>
      <p>Trusted by tens of millions worldwide!</p>
      <h3>Privacy Protection For Any Device</h3>

      <div className='infoBox'>
        <div className='box'>
          <img src='./p1.svg' alt="" />
          <h3>Privacy Essentials for Brave</h3>
          <p>Browse as usual while we add privacy protection. We bundled our search engine, tracker blocker, and encryption enforcer into one Brave Extension.</p>
        </div>

        <div className='box'>
          <img src='./p2.svg' alt="" />
          <h3>Private Search Engine</h3>
          <p>Search privately with our app or extension, add private web search to your favorite browser, or search directly at duckduckgo.com.</p>
        </div>

        <div className='box'>
          <img src='./p3.svg' alt="" />
          <h3>Privacy Browser App</h3>
          <p>Our private browser for mobile comes equipped with our search engine, tracker blocker, encryption enforcer, and more. Available on iOS & Android.</p>
        </div>
      </div>

      <h1>We don’t store your personal information. Ever.</h1>
      <p>Our privacy policy is simple: we don’t collect
or share any of your personal information.</p>

      <button type='submit' className='btn Add2'>Add DuckDuckGo to Brave</button>
      <h1>Frequently Asked Questions</h1>
      <div className='questions'>
        <details className='Q_boxes'>
          <summary className='summary'>How does DuckDuckGo make money?</summary>
          <p className='detai'>We make our money from private ads on our search engine. On other search engines, ads are based on profiles compiled about you using your personal information like search, browsing, and purchase history. Since we don’t collect that information, search ads on DuckDuckGo are based on the search results page you are viewing, not on you as a person. For example, if you search for cars, we’ll show you ads about cars. Learn more.</p>
        </details>

        <details className='Q_boxes'>
          <summary className='summary'>What does Google know about me?</summary>
          <p className='detai'>Not only does Google keep your search history forever by default, their trackers have been found on 75% of the top million websites, which means they are tracking most everywhere you go on the Internet (unless you stop them with DuckDuckGo!). And that’s just the tip of the iceberg. Learn more.</p>
        </details>
      </div>
    </div>
  )
}

export default App
