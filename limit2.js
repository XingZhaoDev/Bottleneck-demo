const mainefest = require('./manifest')
const Bottleneck = require('bottleneck')

let limiter;

const startRateLimiter = () => {
    console.log('start rate limiter in app')
}

const getRateLimiter = (bucket) => {
    if(bucket === mainefest.routerConfigs.timesheet.bucket) {
        console.log('limit for timesheet')
        limiter = new Bottleneck({
            maxConcurrent: 20,
            minTime: 500
        })
    } else if (bucket === mainefest.routerConfigs.asset360.bucket) {
        console.log('limit for asset360')
        limiter = new Bottleneck({
            maxConcurrent: 10,
            minTime: 500
        })
    }
    observe()
    return limiter
}

const observe = () => {
    if(!limiter) {
        return
    }
    limiter.on('done', info => {
        console.log('limit schedule done with counts: ', limiter.counts())
    })
    
    limiter.on('received', info => {
        console.log('limit schedule received with counts: ', limiter.counts())
    })
}

module.exports = {
    getRateLimiter,
    startRateLimiter
}