import React, { Component } from 'react';
import Hero from './Hero';

class Navbar extends Component {



  render() {

    return (
      
      <div>
        <Hero />
        <div id="navbar">
          <a href="#home">Home</a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

  /*   <div className="navbar" id="myHeader">
        <Hero />
         <div className="sticky-shrinknav-header">
         
            <div >
            
                <ul className="menu align-right align-middle sticky-shrinknav-menu">
                    <li><a href="#aboutme">About</a></li>
                    <li><a data-open="cv">Resume</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="https://github.com/koyeary">Github</a></li>
                </ul>
            </div>
        </div>  
        </div> */)
  }

  /* <Hero/>
  <header id="header" class="topbar-sticky-shrink-header">
</header>

<div data-sticky-container>
<div data-sticky data-margin-top='0' data-top-anchor="header:bottom" data-btm-anchor="content:bottom">
<div class="top-bar topbar-sticky-shrink">
<div class="top-bar-title">
  <img src="https://placehold.it/150x38" alt="" />
</div>
<div class="top-bar-right">
  <ul class="menu">
    <li><a href="#">Thing 1</a></li>
    <li><a href="#">Thing 2</a></li>
    <li><a href="#">Thing 3</a></li>
  </ul>
</div>
</div>
</div>
</div>
</div>
*/

}

export default Navbar;