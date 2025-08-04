async function loadComponent(id, path) {
    const res = await fetch(path);
    const html = await res.text();
    document.getElementById(id).innerHTML = html;

    // 네비바랑 비디오그리드 불러와서 js 실행
    if (id === 'navbar' && typeof initNavBar === 'function') {
        initNavBar();
    }

    if (id === 'videoGrid') {
        const script = document.createElement('script');
        script.src = 'js/subscribeGrid.js';
        document.body.appendChild(script);
    }
}

window.addEventListener('DOMContentLoaded', () => {
    loadComponent('navbar', 'html/navbar.html');
    loadComponent('videoGrid', 'html/subscribeGrid.html');
});
