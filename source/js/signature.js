;(function () {
  var root = document.getElementById('signature-hitokoto')
  if (!root) return

  var quoteNode = document.getElementById('signature-hitokoto-quote')
  var metaNode = document.getElementById('signature-hitokoto-meta')
  var authorNode = document.getElementById('signature-hitokoto-author')
  var sourceNode = document.getElementById('signature-hitokoto-source')
  var cacheKey = 'signature-hitokoto-cache'
  var cacheTTL = 6 * 60 * 60 * 1000
  var fallbackData = {
    hitokoto: '师者，所以传道授业解惑也。',
    from_who: '韩愈',
    from: '师说',
  }

  function formatQuote(text) {
    var content = (text || fallbackData.hitokoto).replace(/[「」]/g, '').trim()
    return '「' + content + '」'
  }

  function formatMeta(author, source) {
    return {
      author: (author || '').trim() ? '—— ' + (author || '').trim() : '',
      source: (source || '').trim() ? '《' + (source || '').trim() + '》' : '',
    }
  }

  function render(data) {
    var meta = formatMeta(data.from_who, data.from)
    quoteNode.textContent = formatQuote(data.hitokoto)
    authorNode.textContent = meta.author
    sourceNode.textContent = meta.source
    authorNode.hidden = !meta.author
    sourceNode.hidden = !meta.source
    metaNode.hidden = !meta.author && !meta.source
    root.hidden = false
    window.requestAnimationFrame(function () {
      root.classList.add('is-visible')
    })
  }

  function readCache() {
    try {
      var raw = localStorage.getItem(cacheKey)
      if (!raw) return null

      var parsed = JSON.parse(raw)
      if (!parsed.timestamp || !parsed.data) return null
      if (Date.now() - parsed.timestamp > cacheTTL) return null
      return parsed.data
    } catch (error) {
      return null
    }
  }

  function writeCache(data) {
    try {
      localStorage.setItem(
        cacheKey,
        JSON.stringify({
          timestamp: Date.now(),
          data: data,
        })
      )
    } catch (error) {}
  }

  render(readCache() || fallbackData)

  fetch('https://v1.hitokoto.cn/?c=i&c=k')
    .then(function (response) {
      if (!response.ok) throw new Error('Failed to fetch hitokoto')
      return response.json()
    })
    .then(function (payload) {
      var data = {
        hitokoto: payload && payload.hitokoto ? payload.hitokoto : fallbackData.hitokoto,
        from_who: payload && payload.from_who ? payload.from_who : '',
        from: payload && payload.from ? payload.from : '',
      }

      if (!data.from_who && !data.from) {
        data.from_who = fallbackData.from_who
        data.from = fallbackData.from
      }

      writeCache(data)
      render(data)
    })
    .catch(function () {
      render(fallbackData)
    })
})()
