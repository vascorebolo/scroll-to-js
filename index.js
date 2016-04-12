module.exports = function(element, to, duration) {
  var difference = to - element.scrollTop
  var perTick = difference / duration * 10

  setTimeout(function() {
    element.scrollTop = element.scrollTop + perTick

    if (element.scrollTop === to) return

    scrollTo(element, to, duration - 10)
  }, 10)
}
