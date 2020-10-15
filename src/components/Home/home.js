import React from 'react';
import Slider from './Slider/slider';
import About from './About0/about';
import Works from './Works0/works';
import Join from './Join/join';
import Social from './Social/social';



const Home = () => {
  return (
     <section>
         <Slider />
         <About />
         <Works />
         <Join />
         <Social />       
      </section>
  );
}

export default Home;
