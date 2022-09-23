import React from 'react'

const Vault = () => {
  return (
    <div id='body-value'>
            <section className="home-main-sec2">
        <div className="container">
          <div className="text-headimg">
            {/* <h1> REAL CTHULHU</h1> */}
            <img className='valt-img' src='/value-photo.png'/>
            </div>

            <div className="text-head">
            <h1 className='mt-0'> Artifacts</h1></div>
            <div className="row">
                <div className="col-md-8 value-right">
                    <ul className="box-head mb-3">
                        <li className="value-box"><img src="/value-box-1.png" alt=""/></li>
                        <li className="value-box"><img src="/value-box-2.png" alt=""/></li>
                        <li className="value-box"><img src="/value-box-3.png" alt=""/></li>
                        <li className="value-box"><img src="/value-box-4.png" alt=""/></li>
                    </ul>
                    <h1 className="text-editor ">Physical Weapons</h1>
                    <ul className="box-head mb-3">
                        <li className="value-box"><img src="/value-box-5.png" alt=""/></li>
                        <li className="value-box"><img src="/value-box-6.png" alt=""/></li>
                        <li className="value-box"><img src="/value-box-7.png" alt=""/></li>
                        <li className="value-box"><img src="/value-box-8.png" alt=""/></li>
                    </ul>
                    <h1 className="text-center1" id='center-txt1'>Potions</h1>
                    <ul className="box-head mb-3" id="box-head3">
                        <li className="value-box"><img src="/value-box-9.png" alt=""/></li>
                        <li className="value-box"><img src="/value-box-10.png" alt=""/></li>
                        <li className="value-box"><img src="/value-box11.png" alt=""/></li>
                        <li className="value-box"><img src="/value-box-12.png" alt=""/></li>
                    </ul>

                </div>
                <div className="col-md-2 value-left">
                  <ul className="left-main">
                    <li className="left1"> <div className="sec-head"> 376,402 <img src="/value-leftsie-1.png" alt=""/></div></li>
                    <li className="left1"> <div className="sec-head">101,877 <img src="/value-leftsie-2.png" alt=""/></div></li>
                    <li className="left1"> <div className="sec-head">21,739 <img src="/value-leftsie-3.png" alt=""/></div></li>
                    <li className="left1"> <div className="sec-head">7,939 <img src="/value-leftsie-4.png" alt=""/></div></li>
                  </ul>

                </div>
            </div>
        </div>

  
    
</section>

    </div>
  )
}

export default Vault