async function loadComponent(id, path) {
    const res = await fetch(path);
    const html = await res.text();
    document.getElementById(id).innerHTML = html;
    console.log(`Loaded ${id} from ${path}`);

    if (id === 'navbar') {
        console.log('Checking for initNavBar:', typeof initNavBar);
        if (typeof initNavBar === 'function') {
            console.log('Calling initNavBar...');
            initNavBar();
        } else {
            console.warn('initNavBar is not defined');
        }
    }
}

window.addEventListener('DOMContentLoaded', () => {
    loadComponent('navbar', './navbar.html');
    loadComponent('videoGrid', './videoGrid.html');
});
