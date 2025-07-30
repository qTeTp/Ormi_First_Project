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

        this.direction = direction;
        this.opend = false;

        // 👉 DOM fully rendered 이후에 측정해야 함
        requestAnimationFrame(() => {
            this.width = this.target.offsetWidth || 240;
            this.target.style[this.direction] = `-${this.width}px`;
        });
    }

    open() {
        if (this.opend) {
            this.close();
            return;
        }
        this.opend = true;
        this.target.style[this.direction] = `0`;
    }

    close() {
        this.target.style[this.direction] = `-${this.width}px`;
        this.opend = false;
    }
}
