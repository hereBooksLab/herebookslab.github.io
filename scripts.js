document.addEventListener("DOMContentLoaded", function() {
  // 更新版权年份
  const timeEl = document.getElementById("copyrightYear");
  if (timeEl) {
    const currentYear = new Date().getFullYear();
    timeEl.textContent = currentYear;
    timeEl.setAttribute("datetime", currentYear);
  }
});

// 注册Service Worker实现离线缓存
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('sw.js')
      .then(function(registration) {
        console.log('ServiceWorker注册成功，作用域：', registration.scope);
      })
      .catch(function(error) {
        console.log('ServiceWorker注册失败：', error);
      });
  });
}

// 为页面内部锚点链接实现平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetEl = document.querySelector(this.getAttribute('href'));
    if(targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  });
});