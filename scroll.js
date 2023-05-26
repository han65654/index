
    window.addEventListener('scroll', function() {
      const div = document.querySelector('.hero');
      const textGood = document.querySelector('.text-good');
      const textGood2 = document.querySelector('.text2-good');
      const profileImage = document.querySelector('.profile-image');
      const scrollY = window.scrollY;
      if (scrollY >= 12) {
        div.classList.add('shifted');
        textGood.style.opacity = '1';
        textGood2.style.opacity = '1';
        profileImage.classList.add('show');
      } else {
        div.classList.remove('shifted');
        textGood.style.opacity = '0';
        textGood2.style.opacity = '0';
        profileImage.classList.remove('show');
      }
    });
