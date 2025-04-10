document.addEventListener('DOMContentLoaded', function() {
    // メニュー要素の取得
    const menu = document.getElementById('spMenu');
    const closeButton = document.getElementById('menuToggle');
    
    if (!menu || !closeButton) {
        console.error('メニューまたは閉じるボタンが見つかりません');
        return;
    }
    
    // メニューの表示/非表示を切り替える関数
    function toggleMenu(show) {
        menu.style.display = show ? 'flex' : 'none';
        
        // メニューが表示されているときは、背景のスクロールを無効にする
        document.body.style.overflow = show ? 'hidden' : '';
        
        // アイコンと閉じるボタンのテキストを変更
        const iconElement = closeButton.querySelector('.icon');
        const closeText = closeButton.querySelector('.close');
        
        if (iconElement) {
            iconElement.style.background = show 
                ? 'url(https://static.codia.ai/custom_image/2025-04-09/161152/close-icon.svg) no-repeat center'
                : 'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMgN0gyMU0zIDEySDIxTTMgMTdIMjEiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=) no-repeat center';
            iconElement.style.backgroundSize = 'cover';
        }
        
        if (closeText) {
            closeText.textContent = show ? '閉じる' : 'メニュー';
        }
    }
    
    // 閉じるボタンのクリックイベント
    closeButton.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        const isVisible = menu.style.display === 'flex';
        toggleMenu(!isVisible);
    });
    
    // メニューを開く関数（外部から呼び出し用）
    window.openMenu = function() {
        toggleMenu(true);
    };
    
    // メニューを閉じる関数（外部から呼び出し用）
    window.closeMenu = function() {
        toggleMenu(false);
    };
    
    // 初期状態を設定
    toggleMenu(false);

    // スライドショーの制御
    const slides = document.querySelectorAll('.mv-slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // 初期表示
    showSlide(0);

    // 3秒ごとに次のスライドに移動
    setInterval(nextSlide, 3000);
}); 