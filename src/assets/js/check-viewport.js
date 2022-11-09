export function viewport() {
    const lg = 1024;
    const xs = 540;

    const viewport = document.querySelector('meta[name="viewport"]');

    if (window.innerWidth <= lg || device.tablet()) {
        viewport.setAttribute('content', 'width=1024');
    }
    if (window.innerWidth <= xs || device.mobile()) {
        viewport.setAttribute('content', 'width=540');
    }
}