document.addEventListener('DOMContentLoaded', () => {
    const heartRain = document.getElementById('heart-rain');
  
    function createHeart() {
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.style.left = Math.random() * window.innerWidth + 'px';
  
      heartRain.appendChild(heart);
  
      setTimeout(() => {
        heart.remove();
      }, 2000);
    }
  
    setInterval(createHeart, 500);
  });
  