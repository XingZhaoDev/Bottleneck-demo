const Bottleneck = require('bottleneck')
const History = require('./History')

const limiter = new Bottleneck({
    minTime: 333
});

const history = new History(100)

const doJob = async () => {
    try {
        const response = await history.remoteRequest()
        console.log('api response Without req limit: ', response.body)
    } catch (error) {
        console.log(error)
    }
}

const doJobWithLimit = async () => {
    try {
        const response = await limiter.schedule(history.remoteRequest);
        console.log('api response With req limit: ', response.body)
    } catch (error) {
        console.log('request error is here ===> : ', error)
    }
}
doJobWithLimit()
doJob()