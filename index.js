const Bottleneck = require('bottleneck')
const History = require('./History')
const Limiter = require('./Limiter')
const mainefest = require('./manifest')

const { getRateLimiter } = require('./limit2')

const limiter = new Bottleneck({
    maxConcurrent: 10,
    minTime: 333
});

const l2 = new Limiter(5)
l2.startLimiter()


const l3 = getRateLimiter(mainefest.routerConfigs.asset360.bucket)

const history = new History(100)

const mockUrl =  "https://mocki.io/v1/27bcd762-1dfa-4eaa-89bb-401bad2cf1c5" 
const doJob = async (index) => {
    try {
        const response = await history.remoteRequest(mockUrl)
        console.log(`api  without limit ${index} response With req limit:${response.body} `)
    } catch (error) {
        console.log(error)
    }
}
const request = history.remoteRequest(mockUrl)

const doJobWithLimit = async (index) => {
    try {
        const response = await l3.schedule( () => history.remoteRequest(mockUrl));
        console.log(`api ${index} response With req limit:${response.body} `)
    } catch (error) {
        console.log('request error is here ===> : ', error)
    }
}

for (let i = 0; i < 10; i++) {
    console.log(`hit request ${i}`)
    doJobWithLimit(i)
}