document.querySelector('.projects').addEventListener('click', function() {
    const targetElement = document.getElementById('project1');
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });

  document.querySelector('.about').addEventListener('click', function() {
    const targetX = 0;
    const targetY = 1150;
  
    window.scrollTo({
      top: targetY,
      left: targetX,
      behavior: 'smooth' // Add smooth scrolling effect
    });
  });

  document.querySelector('.home').addEventListener('click', function() {
    const targetX = 0;
    const targetY = 0;
  
    window.scrollTo({
      top: targetY,
      left: targetX,
      behavior: 'smooth' // Add smooth scrolling effect
    });
  });

  document.querySelector('.contact').addEventListener('click', function() {
    const targetX = 0;
    const targetY = 10000;
  
    window.scrollTo({
      top: targetY,
      left: targetX,
      behavior: 'smooth' // Add smooth scrolling effect
    });
  });