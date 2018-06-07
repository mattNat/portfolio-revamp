import React from 'react';
import ComputerPic from '../img/computerBuildShrink.jpg'

import '../styles/computerBuild.css';

export default function ComputerBuild() {
  return (
    <div className="computer-build">
      <div className="text-center portfolio-intro">
        <h2 className="section-heading">My Desktop</h2>
        <h3 id="below-section" className="section-subheading text-muted">
          Custom made <br/> Built from scratch 
        </h3>
      </div>
      <div className="row">
        <div className="column">
          <img src={ComputerPic} alt="custom desktop"/>
        </div>
        <div className="column specs">
          <h3 className="text-muted">Specifications</h3>
          <p id="small-text" className="text-muted">Operating Systems (Dual Boot)</p>
          <ul id="small-text" className="text-muted">
            <li><em>[Web Development]</em> Ubuntu 16.04 LTS</li>
            <li><em>[Gaming]</em> Windows 10</li>            
          </ul>
          <p id="small-text" className="text-muted">Hardware</p>
          <ul id="small-text" className="text-muted">
            <li><em>[Graphics Card]</em> EVGA Nvidia GeForce GTX 760 SC 4GB GDDR5</li> 
            <li><em>[Motherboard]</em> ASUS Maximus VI Hero</li>
            <li><em>[Sound Card]</em> Creative Sound Blaster Zx PCIe</li>                       
            <li><em>[Processor]</em> Intel(R) Core(TM) i7-4770K CPU @ 3.50GHz</li>
            <li><em>[RAM]</em> Corsair Vengeance (2x8GB) DDR3 1600 MHz</li>           
          </ul>
          <p id="small-text" className="text-muted">Storage</p>
          <ul id="small-text" className="text-muted">
            <li><em>[SSD]</em> Crucial MX100 256 GB</li> 
            <li><em>[SSD]</em> Crucial M4 128 GB</li>
            <li><em>[HDD]</em> WD Caviar Black 1 TB SATA II 7200 RPM 64 MB Cache</li>
            <li><em>[HDD]</em> WD Green 2 TB SATA II 5400 RPM 64 MB Cache</li>           
          </ul>
        </div>
      </div>
    </div>
  );
};