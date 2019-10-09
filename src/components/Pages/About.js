import React from 'react';
import './About.css';


const About = () => {
  return (
    <div className="About">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0097a7" fill-opacity="0.8" d="M0,160L80,154.7C160,149,320,139,480,149.3C640,160,800,192,960,202.7C1120,213,1280,203,1360,197.3L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
      <h1>ABOUT COUNTRIES INFORMANT</h1>
      <p className="first">
        There are several times in which we do like to quickly get a piece of information about a particular country. The information may be about the population of the country, the country's timezone, the neighboring countries to that country and the likes.
      </p>
      <p className="second">
        This app has come to provide a solution to such a quick <strong>Search and get</strong> info. However, the user is hereby strongly advised to do further research as the total accuracy of the data gotten from the API consumed in building this app is not guaranteed.
      </p>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0097a7" fill-opacity="0.8" d="M0,160L80,154.7C160,149,320,139,480,149.3C640,160,800,192,960,202.7C1120,213,1280,203,1360,197.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
    </div>
  );
}

export default About;
