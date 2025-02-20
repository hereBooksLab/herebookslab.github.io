document.addEventListener("DOMContentLoaded", function() {
  const t = document.getElementById("copyrightYear");
  t && (t.textContent = (new Date).getFullYear(), t.setAttribute("datetime", t.textContent))
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      await navigator.serviceWorker.register('sw.js');
    } catch (error) {
      console.error('ServiceWorker注册失败：', error);
    }
  });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});