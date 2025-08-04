// 출처 : https://frontend-bear.tistory.com/16
function initNavBar() {
    const sideBarL = new SideBar('.js-side_bar-l', 'left');
    const sideBarR = new SideBar('.js-side_bar-r', 'right');

    document.querySelectorAll('.hamburger-button').forEach((btn) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            sideBarL.open();
        });
    });

    document.querySelectorAll('.profile-button').forEach((btn) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            sideBarR.open();
        });
    });
}

class SideBar {
    constructor(target, direction) {
        if (typeof target === 'string') {
            this.target = document.querySelector(target);
        } else {
            this.target = target;
        }

        if (!this.target) {
            console.warn(`[SideBar] Target "${target}" not found.`);
            return;
        }

        this.direction = direction;
        this.opend = false;

        requestAnimationFrame(() => {
            this.width = this.target.offsetWidth || 240;
            this.target.style[this.direction] = `-${this.width}px`;
        });
    }

    open() {
        if (!this.target) return;

        if (this.opend) {
            this.close();
            return;
        }
        this.opend = true;
        this.target.style[this.direction] = `0`;
    }

    close() {
        if (!this.target) return;
        this.target.style[this.direction] = `-${this.width}px`;
        this.opend = false;
    }
}
