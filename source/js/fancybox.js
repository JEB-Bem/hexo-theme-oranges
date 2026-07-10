// fancybox js
(function () {
  function initFancybox() {
    if (!window.jQuery) {
      return;
    }

    var $ = window.jQuery;
    $(".post-content .markdown-body img").each(function () {
      var parent = $(this).parent().get(0);
      if (parent && parent.tagName.toLowerCase() === "a") {
        return;
      }

      var element = document.createElement("a");
      $(element).attr("data-fancybox", "gallery");
      $(element).attr("style", "text-decoration: none; outline: none; border: 0px none transparent;");

      if ($(this).attr("data-original")) {
        $(element).attr("href", $(this).attr("data-original"));
      } else {
        $(element).attr("href", $(this).attr("src"));
      }

      $(this).wrap(element);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initFancybox, { once: true });
  } else {
    initFancybox();
  }
})();
