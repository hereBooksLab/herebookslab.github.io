// DOMContentLoaded 事件：更新页脚年份
document.addEventListener("DOMContentLoaded", function () {
  const yearElem = document.getElementById("copyrightYear");
  if (yearElem) {
    const currentYear = new Date().getFullYear();
    yearElem.textContent = currentYear;
    yearElem.setAttribute("datetime", currentYear);
  }
});

// 注册 Service Worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", async () => {
    try {
      await navigator.serviceWorker.register("sw.js");
    } catch (error) {
      console.error("ServiceWorker 注册失败：", error);
    }
  });
}
