// 팝업 표시
function showPopup() {
    document.getElementById('popup').style.display = 'block';
  }
  
  // 팝업 숨김
  function hidePopup() {
    document.getElementById('popup').style.display = 'none';
  }
  
  // 동의 버튼 클릭 시 이벤트 처리
  document.getElementById('agree-button').addEventListener('click', function() {
    // 비밀번호 확인
    const passwordInput = document.getElementById('password-input').value;
    if (passwordInput === '900418') {
      // 올바른 비밀번호인 경우
      console.log('Agreed');
      hidePopup();
      startCountdown();
    } else {
      // 올바르지 않은 비밀번호인 경우
      alert('Wrong password.');
    }
  });
  
  // 동의하지 않음 버튼 클릭 시 이벤트 처리
  document.getElementById('disagree-button').addEventListener('click', function() {
    // 여기에 동의하지 않음 버튼을 클릭했을 때 처리할 로직을 작성합니다.
    console.log('동의하지 않음 버튼이 클릭되었습니다.');
    window.top.close();
    alert('Access is denied. please close this page');
  });
  
  // 페이지 로드 시 팝업 표시
  window.onload = function() {
    showPopup();
    startCountdown();
  };
  
  // Countdown 시작하는 함수
  function startCountdown() {
    const myDate = new Date('JAN 01, 2024 00:00:00');
  
    let timer = setInterval(function() {
      const today = new Date().getTime();
      const diff = myDate - today;
  
      let days = Math.floor(diff / (1000 * 60 * 60 * 24));
      let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
      document.getElementById("days").innerHTML = days;
      document.getElementById("hours").innerHTML = hours;
      document.getElementById("minutes").innerHTML = minutes;
      document.getElementById("seconds").innerHTML = seconds;
  
      if (diff < 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "EXPIRED";
      }
    }, 1);
  }
  