document.addEventListener('DOMContentLoaded', function() {
  const floatingNav = document.querySelector('.floating-nav-container');
  const header = document.querySelector('.header');
  const navigationBar = document.querySelector('.navigation-bar');
  
  // 初期状態では非表示
  floatingNav.classList.remove('visible');
  
  // ヘッダーとナビゲーションバーの高さを取得
  let headerHeight = header ? header.offsetHeight : 0;
  let navBarHeight = navigationBar ? navigationBar.offsetHeight : 0;
  let totalOffset = headerHeight + navBarHeight;
  
  // スクロールイベントの処理
  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // ヘッダーとナビゲーションバーの高さを超えたスクロールで表示
    if (scrollTop > totalOffset) {
      floatingNav.classList.add('visible');
    } else {
      floatingNav.classList.remove('visible');
    }
  });
  
  // ウィンドウのリサイズ時に高さを再計算
  window.addEventListener('resize', function() {
    headerHeight = header ? header.offsetHeight : 0;
    navBarHeight = navigationBar ? navigationBar.offsetHeight : 0;
    totalOffset = headerHeight + navBarHeight;
  });
}); 