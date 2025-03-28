import { useState } from 'react'
import aByteOfCode from './assets/aByteOfCode.svg'
import broCode from './assets/broCode.svg'
import byteByteGo from './assets/bytebytego.svg'
import codeBullets from './assets/codeBullets.svg'
import computerphile from './assets/computerphile.svg'
import DevTips from './assets/DevTips.svg'
import fireship from './assets/fireship.svg'
import Reducible from './assets/Reducible.svg'
import tsodingDaily from './assets/tsodingDaily.svg'
import webDevSimplified from './assets/webDevSimplified.svg'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Cool Youtube channels to check out and get started</h2>
      <div className="container">
        <a href="https://www.youtube.com/@AByteofCode" target="_blank">
          <img src={aByteOfCode} className="logo" alt="aByteOfCode logo" />
          {/* <p className= 'caption'>a Byte of Code</p> */}
        </a>

        <a href="https://www.youtube.com/@BroCodez" target="_blank">
          <img src={broCode} className="logo" alt="broCode logo" />
          {/* <p className= 'caption'>Bro Code</p> */}
        </a>
        
        <a href="https://www.youtube.com/@ByteByteGo" target="_blank">
          <img src={byteByteGo} className="logo" alt="byteByteGo logo" />
          {/* <p className= 'caption'>Byte Byte Go</p> */}
        </a>
        <a href="https://www.youtube.com/@CodeBullet" target="_blank">
          <img src={codeBullets} className="logo" alt="codeBullets logo" />
          {/* <p className= 'caption'>Code Bullets</p> */}
        </a>
        <a href="https://www.youtube.com/@Computerphile" target="_blank">
          <img src={computerphile} className="logo" alt="computerphile logo" />
          {/* <p className= 'caption'>ComputerPhile</p> */}
        </a>
        <a href="https://www.youtube.com/@OfficialDevTips" target="_blank">
          <img src={DevTips} className="logo" alt="DevTips logo" />
          {/* <p className= 'caption'>DevTips</p> */}
        </a>
        <a href="https://www.youtube.com/@Fireship" target="_blank">
          <img src={fireship} className="logo" alt="fireship logo" />
          {/* <p className= 'caption'>FireShip</p> */}
        </a>
        <a href="https://www.youtube.com/@Reducible" target="_blank">
          <img src={Reducible} className="logo" alt="Reducible logo" />
          {/* <p className= 'caption'>Reducible</p> */}
        </a>
        <a href="https://www.youtube.com/@TsodingDaily" target="_blank">
          <img src={tsodingDaily} className="logo" alt="tsodingDaily logo" />
          {/* <p className= 'caption'>Tsoding Daily</p> */}
        </a>
        <a href="https://www.youtube.com/@WebDevSimplified" target="_blank">
          <img src={webDevSimplified} className="logo" alt="webDevSimplified logo" />
          {/* <p className= 'caption'>Wev Dev Simplified</p> */}
        </a>
      </div>
      
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <p>
        Start exploring these resources and find the best one that fits your learning style!
        </p>
      </div>

      <p className="read-the-docs">
        Happy code binging techies!
      </p>
    </>
  )
}

export default App
