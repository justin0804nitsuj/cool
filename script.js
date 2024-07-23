// script.js
document.addEventListener('DOMContentLoaded', function () {
    var backToTopButton = document.getElementById('back-to-top');
  
    // 滾動事件處理
    window.addEventListener('scroll', function () {
      if (window.scrollY > 300) { // 當滾動超過 300px 顯示按鈕
        backToTopButton.style.display = 'block';
      } else {
        backToTopButton.style.display = 'none';
      }
    });
  
    // 點擊事件處理
    backToTopButton.addEventListener('click', function (event) {
      event.preventDefault(); // 防止默認行為
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // 平滑滾動
      });
    });
  });