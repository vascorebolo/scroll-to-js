class Scroller {
  constructor(target, time) {
  }

  smoothScroll() {
    let start = new Date().getTime()

    let timer = setInterval(() => {
      let step = Math.min(1, (new Date().getTime() - start) / this.time)

      document.body['scrollTop'] = step * this.target.offsetTop

      if (step === 1) clearInterval(timer)
    }, 25)
  }
}

module.exports = new Scroller()
