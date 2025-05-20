

import { useMediaQuery } from 'react-responsive';




import Button from '../components/Button.jsx';


import { calculateSizes } from '../constants/index.js';


const Hero = () => {

  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });


  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 space-y-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I am Abhijeet Kumar Shah <span className="waving-hand">👋</span>
        </p>
        <img 
        src="https://images.unsplash.com/photo-1590410413989-335162b01314?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="Beautiful Landscape" 
        style={{ width: '100%', height: 'auto' }} 
      />
        <p className="hero_tag text-gray-gradient">FullStack Developer</p>
      </div>

      <div className="w-full h-full absolute inset-0">

      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 text-center">
        <a href="#about" className="w-fit mx-auto">
          <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div>
    </section>
  );
};

export default Hero;

