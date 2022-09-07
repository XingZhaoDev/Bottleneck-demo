const mockRequest = require('./api')

exports = module.exports = class {
    constructor(record) {
        this.record = record
    }
    updateRecord(grade) {
        testMethod()
        this.record += grade
    }
    async remoteRequest(url) {
        testMethod()
        return await mockRequest(url)
    }
}
const testMethod = async () => {
    console.log('testMethod outside of class!!!!!!!!!!!!!!')
}