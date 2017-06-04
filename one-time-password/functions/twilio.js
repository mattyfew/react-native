const twilio = require('twilio')

const accountsId = 'AC60c3c45009664baf3574184d4e1a0a1b'
const authToken = '5a9afcb6daa6ffd749ebf37c2af10612'

module.exports = new twilio.Twilio(accountsId, authToken)
