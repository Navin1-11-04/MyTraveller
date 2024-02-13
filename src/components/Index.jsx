import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import image1 from '../assets/greenland.jpg';
import image2 from '../assets/spain.jpg';
import image3 from '../assets/canada.jpg';
import image4 from '../assets/africa.jpg';
import bars from '../assets/bars-solid.svg'
import './index.css';
function Index() {
  return (
    <div className="landing">
      <nav className="navbar navbar-expand-lg pt-lg-4 pb-lg-4 pt-2 pb-2">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <img src={bars} alt=".."/>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav mx-lg-2">
              <li className="nav-item mx-lg-4"> 
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item mx-lg-4"> 
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item mx-lg-4"> 
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li className="nav-item mx-lg-4"> 
                <a className="nav-link" href="#">Contact us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className='slider'>
        <div className="list">
            <div className="item active">
                <img src={image1} alt='..'/>
                <div className="content">
                    <p>Design</p>
                    <h2>Slider 00</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo reiciendis, accusamus numquam mollitia nihil excepturi asperiores labore iure illo error expedita itaque unde at in nulla deleniti vero explicabo quia.</p>
                </div>
            </div>
            <div className="item">
                <img src={image2} alt=''/>
                <div className="content">
                    <p>Design</p>
                    <h2>Slider 00</h2>                
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo reiciendis, accusamus numquam mollitia nihil excepturi asperiores labore iure illo error expedita itaque unde at in nulla deleniti vero explicabo quia.</p>
                </div>
            </div>
            <div className="item">
                <img src={image3} alt=''/>
                <div className="content">
                    <p>Design</p>
                    <h2>Slider 00</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo reiciendis, accusamus numquam mollitia nihil excepturi asperiores labore iure illo error expedita itaque unde at in nulla deleniti vero explicabo quia.</p>
                </div>
            </div>
            <div className="item">
                <img src={image4} alt=''/>
                <div className="content">
                    <p>Design</p>
                    <h2>Slider 00</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo reiciendis, accusamus numquam mollitia nihil excepturi asperiores labore iure illo error expedita itaque unde at in nulla deleniti vero explicabo quia.</p>
                </div>
            </div>
        </div>
        <div className="arrows-small">
            <button id="prev">◁</button>
            <button id="next">▷</button>
        </div>
        <div className="thumbnail">
            <div className="item active">
                <img src={image1} alt=".."/>
                <div className="content">
                    Name Slider
                </div>
            </div>
            <div className="item">
                <img src={image2} alt=".."/>
                <div className="content">
                    Name Slider
                </div>
            </div>
            <div className="item">
                <img src={image3} alt=".."/>
                <div className="content">
                    Name Slider
                </div>
            </div>
            <div className="item">
                <img src={image4} alt=".."/>
                <div className="content">
                    Name Slider
                </div>
            </div>
            
        </div>
    </div>
    </div>
  );
}

export default Index;
