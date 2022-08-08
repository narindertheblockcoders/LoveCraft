import { useRouter } from 'next/router'
import React from 'react'

const Navbar = () => {

const router = useRouter()


  return (
    <div>

      
         <header>
<section className="header">
            <div className="container">
            
          <ul className="header-main">
            <a href="/arkhampoker"  className="btn six-shape" type="#"> 
            </a>
            <a href="/dungeonrun" className="btn seven-shape" type="#"></a>
            <a href="/fantasy" className="btn eight-shape" type="#">
            </a>
            <a href="/realchathulu" className="btn nine-shape" type="#"></a>
           
          </ul>
          
            </div>
          </section>
    </header>
    </div>
  )
}

export default Navbar