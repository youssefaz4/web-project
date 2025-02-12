const scrollDiv = document.getElementById('header');

addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    
    if (scrollPosition > 100) {
        scrollDiv.style.backgroundColor = '';
    } else {
        scrollDiv.style.backgroundColor = '0,0,0,0.5';
    }
});
