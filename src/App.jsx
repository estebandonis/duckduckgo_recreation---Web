import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <nav>
        <div className='menu-toggle'>
          <span className='menu-icon'></span>
          <button onClick={toggleMenu}>Menú</button>
          {isOpen && (
            <ul className='ul options'>
              <li className='li option' onClick={() => handleOptionClick('Opción 1')}>Twitter </li>
              <li className='li option' onClick={() => handleOptionClick('Opción 2')}>Reddit</li>
              <li className='li option' onClick={() => handleOptionClick('Opción 3')}>Blog</li>
              <li className='li option' onClick={() => handleOptionClick('Opción 4')}>Newsletter</li>
            </ul>
      )}
        </div>
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
        <li className='li benefits'>DuckDuckGo Search</li>
        <li className='li benefits'>Tracker Blocking</li>
        <li className='li benefits'>Site Encryption</li>
      </ul>
      <button type='submit' className='btn Add'>Add DuckDuckGo to Brave</button>
      <p>Trusted by tens of millions worldwide!</p>
      <h3>Privacy Protection For Any Device</h3>

      <div className='div greenbox'>
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
      </div>
      <div className='div image'>
        <img src='./duckduckgobackground.svg'/>
      </div>
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

        <details className='Q_boxes'>
          <summary className='summary'>Why use DuckDuckGo instead of Google?</summary>
          <p className='detai'>Ever notice ads constantly following you around? That’s in part because Google tracks your searches and hides trackers on millions of websites. By contrast, our private search engine doesn’t track your searches and our DuckDuckGo browser extension and mobile app block Google’s (and many other companies’) trackers across the Internet, helping to keep your browsing history more private, as it should be. And that’s just the beginning — by using DuckDuckGo you also escape the manipulation of the filter bubble and can use the Internet faster (after all that tracking code is disabled). Learn more.</p>
        </details>

        <details className='Q_boxes'>
          <summary className='summary'>How do DuckDuckGo search results compare to Google’s?</summary>
          <p className='detai'>DuckDuckGo search gives you truly private search results without tradeoffs in result quality. We have everything you’ve come to expect in an online search experience, and a few bonus features that make searching the Internet not only private, but also a bit more fun! And, on top of that, because there is no search history on DuckDuckGo, you escape the filter bubble of manipulated results. Learn more.</p>
        </details>

        <details className='Q_boxes'>
          <summary className='summary'>Is DuckDuckGo an “unfiltered” search engine?</summary>
          <p className='detai'>Unlike some other search engines, we don’t alter search results based on someone’s previous search history. In fact, since we don’t track our users we don’t have access to search histories at all! Those other search engines show you results based on a data profile about you and your online activity (including your search history), and so can be slanted towards what they think you will click on the most based on this profiling. This effect is commonly known as the search filter bubble, but using DuckDuckGo can help you escape it.</p>
          <p className='detai'>This does not mean our search results are generally “unfiltered” because, for every search you make online, a search engine’s job is to filter millions of possible results down to a ranked order of just a handful. In other words, a search engine has to use algorithms programmed by people to determine what shows up first in the list of results, what shows up second, and so on. Otherwise, for every search you’d just get a completely random set of results, which of course wouldn’t be very useful.</p>
        </details>

        <details className='Q_boxes'>
          <summary className='summary'>Is DuckDuckGo owned by Google?</summary>
          <p className='detai'>No, we are not and have never been owned by Google. We have been an independent company since our founding in 2008 and, unlike some other search engines, we don’t rely on Google’s results for any of our search results. You may notice that we offer a Google Chrome extension and a Google Android app, but these are also not in partnership with Google and actually aim to protect you from Google’s online trackers.</p>
        </details>

        <details className='Q_boxes'>
          <summary className='summary'>What’s the difference between using DuckDuckGo and Incognito mode?</summary>
          <p className='detai'>It is a myth that you can’t be tracked while using so-called “Incognito” mode. In fact, Incognito mode mainly just deletes information on your computer and does nothing to stop Google from saving your searches, nor does it stop companies, Internet service providers, or governments from being able to track you across the Internet. By contrast, DuckDuckGo search is completely anonymous and if you add our app & extension on top, we help keep you private when browsing off of search results. Learn more.</p>
        </details>

        <details className='Q_boxes'>
          <summary className='summary'>How popular is DuckDuckGo?</summary>
          <p className='detai'>We don’t track our users, so it’s actually impossible for us to know how many users in total are using our products. However, we are able to make an estimate based on the number of searches we get per month. Our best guess — over 50 million people! Learn more.</p>
        </details>

        <details className='Q_boxes'>
          <summary className='summary'>How does the DuckDuckGo app & extension work?</summary>
          <p className='detai'>The DuckDuckGo Privacy Browser mobile app and Privacy Essentials desktop extension both come with our best-in-class tracker blocker, encryption enforcer, and private search engine – all in one simple package. This gives you all the key privacy protection tools to search and browse privately, curbing the constant monitoring of your Internet activity by companies like Google and Facebook. Learn more.</p>
        </details>
      </div>
    </div>
  )
}

export default App
