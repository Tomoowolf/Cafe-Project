const swiper = new Swiper(".swiper", {// ページネーションが必要なら追加
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },slidesPerView: 1,
  autoplay: {
    delay: 5000,              // 5秒ごとに切り替え（1000 = 1秒）
    disableOnInteraction: false, // ユーザーが操作しても自動再生を止めない
  },
  // ナビボタンが必要なら追加
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },watchOverflow: false,
loop: true,
grabCursor: true, 
speed: 1200,
effect: "fade", })