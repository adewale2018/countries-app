import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <Footer className="Footer">
      <div>
        <div>
          <span>Saheed</span>
          <div>
            <span>A. Shittu</span>
          </div>
        </div>
      </div>
      <div>
        <span><a className="link" target="_blank" rel="noopener noreferrer" href={'https://github.com/adewale2018'}><i class="fab fa-github"/></a>
        </span>
        <span><a className="link" target="_blank" rel="noopener noreferrer" href={'https://twitter.com/ShittuSaheedA3'}><i class="fab fa-twitter"/></a>
        </span>
        <span><a className="link" target="_blank" rel="noopener noreferrer" href={'https://www.linkedin.com/in/saheed-shittu-56a16789/'}><i class="fab fa-linkedin-in"/></a>
        </span>
      </div>
    </Footer>
  );
}

export default Footer;
