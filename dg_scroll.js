window.addEventListener('DOMContentLoaded', (event) => {
    // about-section 요소의 위치를 페이지 맨 위로 스크롤
    const aboutSection = document.getElementsByID('DG');
    aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });