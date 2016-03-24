module.exports = (element, to, duration) => {
  let difference = to - element.scrollTop
  let perTick = difference / duration * 10

  setTimeout(() => {
    element.scrollTop = element.scrollTop + perTick

    if (element.scrollTop === to) return

    scrollTo(element, to, duration - 10)
  }, 10)
}
