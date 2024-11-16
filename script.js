// 三條線按鈕功能
const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");
const menuList = document.getElementById("menuList");

// 點擊三條線按鈕展開/收合選單
menuToggle.addEventListener("click", () => {
  menu.classList.toggle("visible");
  menu.classList.toggle("hidden");
});

// 動態生成選單項目
const sections = document.querySelectorAll(".content-block");
sections.forEach((section, index) => {
  const firstLineText = section.querySelector("p").textContent; // 獲取第一行文字
  const menuItem = document.createElement("li");
  menuItem.textContent = firstLineText;
  menuItem.addEventListener("click", () => {
    section.scrollIntoView({
      behavior: "smooth",
    });
    menu.classList.add("hidden"); // 點擊選單後自動收合
    menu.classList.remove("visible");
  });
  menuList.appendChild(menuItem);
});

// 滾動至頂部按鈕功能
const scrollToTopButton = document.getElementById("scrollTopButton");
scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// 控制滾動按鈕的顯示與隱藏
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
});


menuToggle.addEventListener("click", () => {
  menu.classList.toggle("visible");
  menu.classList.toggle("hidden");
  document.body.style.overflow = menu.classList.contains("visible") ? "hidden" : "auto";
});
