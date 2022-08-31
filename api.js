const got = require('got');
const mockUrl =  "https://mocki.io/v1/27bcd762-1dfa-4eaa-89bb-401bad2cf1c5" 
const mockRequest = async () => {
    return await got(mockUrl, { json: true} )
}

const mockRequest2 = () => {
    return async () => {
        return await got(mockUrl, { json: true} )
    }
}
module.exports = mockRequest