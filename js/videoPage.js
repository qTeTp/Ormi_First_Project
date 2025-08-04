async function loadComponent(id, path, jsPath) {
    const res = await fetch(path);
    const html = await res.text();
    const container = document.getElementById(id);

    container.innerHTML = html;

    // script 로드
    if (jsPath) {
        const script = document.createElement('script');
        script.src = jsPath;
        script.onload = () => console.log(`Injected ${jsPath}`);
        document.body.appendChild(script);
    }

    // 네비바 초기화 함수
    if (id === 'navbar') {
        setTimeout(() => {
            if (typeof initNavBar === 'function') {
                initNavBar();
            }
        }, 0);
    }
}

// 페이지 로드 시 컴포넌트 불러오기
window.addEventListener('DOMContentLoaded', () => {
    loadComponent('navbar', '../html/navbar.html', '../js/navBar.js');
    loadComponent('videoDetail', '../html/videoDetail.html', '../js/videoDetail.js');
});
