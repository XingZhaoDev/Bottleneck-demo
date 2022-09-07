const Bottleneck = require('bottleneck')
 class Limiter {
    constructor(maxConcurrent) {
        this.limiter = new Bottleneck({
            maxConcurrent: maxConcurrent,
            minTime: 333
        })
        console.log('limiter is:', this.limiter)

        this.limiter.on('error', error => {
            console.log('error in limiter')
        })
    }
    startLimiter() {
        console.log("Starting reate limiter")
    }
}

module.exports = Limiter