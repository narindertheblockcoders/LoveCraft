import React, {useState} from 'react'

const FrontPage = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);







  return (
    <div>
           <section className="home-main-sec">
        <div className="container">
            <h1 className="head-text"><img src="/lovecraft-text.png" alt=""/></h1>
            <div className="row">
           
               <ul className="head-ul">
                   <li className="main-left">
               <div class="left-shape" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                
               </div>
               
                      
                    <img className="bimg" src="/sec-img-left.png" alt=""/> </li>
                   <li className="main-right">
                   <a href="/whitepaper.pdf"  target="_blank" style={{cursor:"pointer"}}> <div className="right-shape" >
                     </div></a> 
                  
                    <img className="simg" src="/sec-img-right.png" alt=""/></li>
               </ul>
    
        </div>
           <div className="footer-text">
            <h1 className="footer-h1"> <img src="/footer-home-text.png" alt=""/></h1>
          </div>   </div>


    </section>




    <script src="js/bootstrap.bundle.min.js"></script>


    </div>
  )
}

export default FrontPage