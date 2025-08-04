async function loadComponent(id, path, jsPath) {
    const res = await fetch(path);
    const html = await res.text();
    const container = document.getElementById(id);

    container.innerHTML = html;

    // HTML 넣고 나서 script 로드
    if (jsPath) {
        const script = document.createElement('script');
        script.src = jsPath;
        script.onload = () => console.log(`Injected ${jsPath}`);
        document.body.appendChild(script);
    }

    // 네비바 초기화 함수 실행
    if (id === 'navbar') {
        // HTML 먼저 들어가야 함수도 바인딩돼 있음
        setTimeout(() => {
            if (typeof initNavBar === 'function') {
                initNavBar();
            }
        }, 0);
    }
}

window.addEventListener('DOMContentLoaded', () => {
    loadComponent('navbar', '../html/navbar.html', '../js/navBar.js');
    loadComponent('videoDetail', '../html/videoDetail.html', '../js/videoDetail.js');
});
