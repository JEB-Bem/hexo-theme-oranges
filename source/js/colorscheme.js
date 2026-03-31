// colorscheme.js
let switchHandle = document.querySelector('#switch-color-scheme')
let themeIcon = document.querySelector('#theme-icon')
let themeIconWrap = document.querySelector('.theme-icon')
let themeModeLabel = document.querySelector('#theme-mode-label')
var html = document.documentElement
const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
const themeModes = ['auto', 'light', 'dark']

function getSystemColorMode() {
    return mediaQuery.matches ? 'dark' : 'light'
}

function getGiscusTheme(colorMode) {
    return colorMode === 'dark' ? 'noborder_gray' : 'light'
}

function syncGiscusTheme(colorMode) {
    const iframe = document.querySelector('iframe.giscus-frame');
    if (iframe) {
        iframe.contentWindow.postMessage({ giscus: { setConfig: {theme: getGiscusTheme(colorMode)} } }, 'https://giscus.app');
    }
}

function updateThemeIcon(colorMode) {
    themeIcon.classList = colorMode === 'dark' ? 'iconfont icon-moon' : 'iconfont icon-sun'
}

function updateThemeModeUI(themeMode) {
    themeIconWrap.classList.toggle('is-auto', themeMode === 'auto')
    themeModeLabel.textContent = themeMode === 'auto' ? 'AUTO' : ''
}

function resolveThemeMode(themeMode) {
    return themeMode === 'auto' ? getSystemColorMode() : themeMode
}

function applyThemeMode(themeMode, shouldPersist = false) {
    let colorMode = resolveThemeMode(themeMode)
    html.setAttribute('color-mode', colorMode);
    window.__themePreference = themeMode;
    window.__colorMode = colorMode;
    window.__giscusTheme = getGiscusTheme(colorMode);
    updateThemeIcon(colorMode);
    updateThemeModeUI(themeMode);
    syncGiscusTheme(colorMode);

    if (shouldPersist) {
        localStorage.setItem('color-mode', themeMode)
    }
}

window.applyThemeMode = applyThemeMode

const switchMode = () => {
    let currentMode = localStorage.getItem('color-mode') || 'auto'
    let nextMode = themeModes[(themeModes.indexOf(currentMode) + 1) % themeModes.length]
    applyThemeMode(nextMode, true)
}

switchHandle.addEventListener('click', switchMode, false)

const currColorMode = localStorage.getItem('color-mode')
applyThemeMode(currColorMode || 'auto')

mediaQuery.addEventListener('change', (event) => {
    if ((localStorage.getItem('color-mode') || 'auto') !== 'auto') return
    applyThemeMode('auto')
})
