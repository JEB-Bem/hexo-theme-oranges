document.addEventListener('DOMContentLoaded', () => {
  const blocks = document.querySelectorAll('.markdown-body pre.shiki')
  const clipboardIcon = `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M9 3.75A2.25 2.25 0 0 1 11.25 1.5h1.5A2.25 2.25 0 0 1 15 3.75h1.75A2.25 2.25 0 0 1 19 6v12.25a2.25 2.25 0 0 1-2.25 2.25H7.25A2.25 2.25 0 0 1 5 18.25V6A2.25 2.25 0 0 1 7.25 3.75H9Zm2.25-.75a.75.75 0 0 0-.75.75V5h3V3.75a.75.75 0 0 0-.75-.75h-1.5ZM7.25 5.25a.75.75 0 0 0-.75.75v12.25c0 .414.336.75.75.75h9.5a.75.75 0 0 0 .75-.75V6a.75.75 0 0 0-.75-.75H15V6a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 9 6v-.75H7.25Z"/>
    </svg>
  `

  if (!blocks.length) return

  blocks.forEach((block) => {
    let wrapper = block.parentElement

    if (!wrapper || !wrapper.classList.contains('shiki-block')) {
      wrapper = document.createElement('div')
      wrapper.className = 'shiki-block'
      block.parentNode.insertBefore(wrapper, block)
      wrapper.appendChild(block)
    }

    if (wrapper.querySelector('.shiki-copy-button')) return

    const button = document.createElement('button')
    button.type = 'button'
    button.className = 'shiki-copy-button'
    button.setAttribute('aria-label', 'Copy code')
    button.innerHTML = clipboardIcon

    button.addEventListener('click', async () => {
      const code = block.querySelector('code')

      if (!code) return

      try {
        await navigator.clipboard.writeText(code.innerText)
        button.classList.add('is-copied')

        window.setTimeout(() => {
          button.classList.remove('is-copied')
        }, 1600)
      } catch (_) {
        button.classList.add('is-failed')

        window.setTimeout(() => {
          button.classList.remove('is-failed')
        }, 1600)
      }
    })

    wrapper.appendChild(button)
  })
})
