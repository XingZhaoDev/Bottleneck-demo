const mockRequest = require('./api')

exports = module.exports = class {
    constructor(record) {
        this.record = record
    }
    updateRecord(grade) {
        this.record += grade
    }
    remoteRequest() {
        return await mockRequest()
    }
}