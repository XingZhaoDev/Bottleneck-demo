const got = require('got');

const mockRequest = async (url) => {
    return await got(url, { json: true} )
}

const mockRequest2 = () => {
    return async () => {
        return await got(mockUrl, { json: true} )
    }
}
module.exports = mockRequest