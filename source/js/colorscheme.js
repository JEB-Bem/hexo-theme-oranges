// colorscheme.js
let switchHandle = document.querySelector('#switch-color-scheme')
let themeIcon = document.querySelector('#theme-icon')
var html = document.documentElement

const switchMode = () => {
    let attr = html.getAttribute('color-mode')
    let colorMode = 'light'
    if (attr === 'light') {
        html.setAttribute('color-mode', 'dark');
        themeIcon.classList = 'iconfont icon-sun';
        colorMode = 'dark';
        const iframe = document.querySelector('iframe.giscus-frame');
        if (iframe) {
            iframe.contentWindow.postMessage({ giscus: { setConfig: {theme: "noborder_gray"} } }, 'https://giscus.app');
        }
    } else {
        html.setAttribute('color-mode', 'light')
        themeIcon.classList = 'iconfont icon-moon'
        colorMode = 'light'
        const iframe = document.querySelector('iframe.giscus-frame');
        if (iframe) {
            iframe.contentWindow.postMessage({ giscus: { setConfig: {theme: "light"} } }, 'https://giscus.app');
        }
    }
    localStorage.setItem('color-mode', colorMode)
}

switchHandle.addEventListener('click', switchMode, false)

const currColorMode = localStorage.getItem('color-mode')
if (currColorMode === 'light') {
    themeIcon.classList = 'iconfont icon-moon'
} else {
    themeIcon.classList = 'iconfont icon-sun'
}
