// 显示 / 隐藏“回到顶部”按钮
function toggleBackToTop() {
  const top = document.documentElement.scrollTop || document.body.scrollTop;
  const btn = document.querySelector(".back-to-top");

  if (top > 200) {
    btn.classList.remove("hidden");
  } else {
    btn.classList.add("hidden");
  }
}

// 平滑滚动：使用浏览器原生 smooth（最完美方案）
function backToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// 初始化事件
document.addEventListener("scroll", toggleBackToTop);
toggleBackToTop(); // 页面载入时检查一次

document.querySelector(".back-to-top").addEventListener("click", backToTop);

