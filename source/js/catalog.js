;(function () {
  var catalog = document.getElementById('catalog')
  var toggleButton = document.getElementById('btn-catalog')
  var toggleIcon = document.getElementById('btn-catalog-icon')
  var postDetails = document.getElementById('post-details')
  if (!catalog || !toggleButton) return

  var tocLinks = Array.prototype.slice.call(catalog.querySelectorAll('.toc-link'))
  if (!tocLinks.length) return

  var headingMap = tocLinks
    .map(function (link) {
      var href = link.getAttribute('href') || ''
      if (!href.startsWith('#')) return null
      var id = decodeURIComponent(href.slice(1))
      var heading = document.getElementById(id)
      if (!heading) return null
      return { link: link, heading: heading }
    })
    .filter(Boolean)

  if (!headingMap.length) return

  var activeId = ''

  function syncLayout() {
    var expanded = !catalog.classList.contains('hidden')
    setExpanded(expanded)
    if (postDetails) {
      postDetails.classList.toggle('catalog-open', expanded && window.innerWidth > 888)
    }
  }

  function setExpanded(expanded) {
    toggleButton.setAttribute('aria-expanded', expanded ? 'true' : 'false')
    if (toggleIcon) {
      toggleIcon.className = expanded
        ? 'btn-catalog__arrow is-expanded'
        : 'btn-catalog__arrow is-collapsed'
    }
  }

  function setActive(id) {
    if (!id || id === activeId) return
    activeId = id

    headingMap.forEach(function (item) {
      var isActive = item.heading.id === id
      item.link.classList.toggle('active', isActive)
      if (isActive) {
        item.link.scrollIntoView({ block: 'nearest' })
      }
    })
  }

  if ('IntersectionObserver' in window) {
    var visibleHeadings = new Map()
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            visibleHeadings.set(entry.target.id, entry.boundingClientRect.top)
          } else {
            visibleHeadings.delete(entry.target.id)
          }
        })

        if (visibleHeadings.size) {
          var nextId = Array.from(visibleHeadings.entries()).sort(function (a, b) {
            return a[1] - b[1]
          })[0][0]
          setActive(nextId)
          return
        }

        var scrollY = window.scrollY || window.pageYOffset
        for (var i = headingMap.length - 1; i >= 0; i -= 1) {
          if (headingMap[i].heading.offsetTop - 120 <= scrollY) {
            setActive(headingMap[i].heading.id)
            return
          }
        }

        setActive(headingMap[0].heading.id)
      },
      {
        rootMargin: '-96px 0px -65% 0px',
        threshold: [0, 1],
      }
    )

    headingMap.forEach(function (item) {
      observer.observe(item.heading)
    })
  } else {
    function onScroll() {
      var scrollY = window.scrollY || window.pageYOffset
      for (var i = headingMap.length - 1; i >= 0; i -= 1) {
        if (headingMap[i].heading.offsetTop - 120 <= scrollY) {
          setActive(headingMap[i].heading.id)
          return
        }
      }
      setActive(headingMap[0].heading.id)
    }

    document.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
  }

  setActive(headingMap[0].heading.id)

  toggleButton.addEventListener('click', function () {
    var nextHidden = !catalog.classList.contains('hidden')
    catalog.classList.toggle('hidden', nextHidden)
    syncLayout()
  })

  tocLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (window.innerWidth <= 888) {
        catalog.classList.add('hidden')
        syncLayout()
      }
    })
  })

  window.addEventListener('resize', function () {
    if (window.innerWidth > 888 && catalog.classList.contains('hidden')) {
      catalog.classList.remove('hidden')
    }
    if (window.innerWidth <= 888 && !catalog.classList.contains('hidden')) {
      catalog.classList.add('hidden')
    }
    syncLayout()
  })

  if (window.innerWidth <= 888) {
    catalog.classList.add('hidden')
  } else {
    catalog.classList.remove('hidden')
  }

  syncLayout()
})()
