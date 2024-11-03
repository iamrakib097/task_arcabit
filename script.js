let lastScrollTop = 0;
const navbarSection = document.getElementById('navbar-section');
const textElements = navbarSection.querySelectorAll('ul li, p'); 
const hoverElements = document.querySelectorAll('.hover\\:underline-effect'); 

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const sectionHeight = 300; 

  if (scrollTop > 100) {
    navbarSection.style.backgroundColor = 'white';


    textElements.forEach(element => {
      element.style.color = 'black';
    });

    
    hoverElements.forEach(element => {
      element.style.setProperty('--underline-color', 'red');
    });

    
    if (scrollTop > lastScrollTop && scrollTop > sectionHeight) {
      navbarSection.style.transform = 'translateY(-102px)';
    } else {
      navbarSection.style.transform = 'translateY(0)'; 
    }
  } else {
    
    navbarSection.style.backgroundColor = '#151515';

    textElements.forEach(element => {
      element.style.color = 'white';
    });

   
    hoverElements.forEach(element => {
      element.style.setProperty('--underline-color', 'white'); 
    });

    navbarSection.style.transform = 'translateY(0)';
  }

  lastScrollTop = scrollTop;
});
