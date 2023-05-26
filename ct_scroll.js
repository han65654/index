// 페이지가 로드된 후 실행
window.addEventListener('DOMContentLoaded', (event) => {
    const contactSection = document.getElementById('CT');
    
    // Contact 버튼을 클릭했을 때 contactSection으로 스크롤
    const contactButton = document.querySelector('a[href="#CT"]');
    contactButton.addEventListener('click', (event) => {
      event.preventDefault();
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'end' });
    });
  });