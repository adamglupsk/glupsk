

// Wait for the DOM to be loaded
document.addEventListener('DOMContentLoaded', function () {
    // Get the SVG element
    const starSvg = document.getElementById('star-svg');


    // Define animation parameters
    const animationDuration = 5000; // 6 seconds
    const delayOne = 0o0; // 1 seconds
    

    starSvg.style.filter = 'blur(20px) brightness(calc(200% + var(--threshold))) contrast(3000%)';

  
    // Apply the filter animation after a delay
    setTimeout(() => {
      // Define keyframes for the animation
      const keyframes = [
        { filter: 'blur(20px) brightness(calc(200% + var(--threshold))) contrast(3000%)' },
        { filter: 'blur(0px) brightness(calc(100% + var(--threshold))) contrast(100%)' }
      ];
  
      // Configure animation options
      const options = {
        duration: animationDuration,
        easing: 'ease-out',
        fill: 'forwards' // Maintain the final state of the animation
      };
  
      // Apply the animation using Web Animations API
      starSvg.animate(keyframes, options);
    }, delayOne);
  });




    // Get the SVG element
    const noteNames = document.getElementById('noteNames');
    const introSvg = document.getElementById('intro-svg');
  
    // Define animation parameters
    const animationDuration = 3000;
    const noDelay = 0o0;
    
    

  
    // Apply the filter animation after a delay
    
      // Define keyframes for the animation
      const keyframes = [
        { filter: 'blur(5px) brightness(calc(175% + var(--threshold))) contrast(1500%)' },
        { filter: 'blur(0px) brightness(100%) contrast(100%)' }
      ];
  
      // Configure animation options
      const options = {
        duration: animationDuration,
        easing: 'ease',
        fill: 'forwards' // Maintain the final state of the animation
      };
  
      // Apply the animation using Web Animations API
      noteNames.animate(keyframes, options); 
      
      
      introSvg.animate(keyframes, options); 







   