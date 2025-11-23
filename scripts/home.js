
const emailBtn = document.getElementById('writeBtn');
  const popup = document.getElementById('contactPopup');
  const closeBtn = document.getElementById('closePopup');
  const mainContent = document.querySelector('main');
  
  emailBtn.addEventListener('click', () => {
    popup.style.display = 'flex';
    mainContent.classList.add('blur');
    document.querySelector('nav').classList.add('blur');
    document.querySelector('footer').classList.add('blur');
  });

  closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
    mainContent.classList.remove('blur');
    document.querySelector('nav').classList.remove('blur');
    document.querySelector('footer').classList.remove('blur');
  });