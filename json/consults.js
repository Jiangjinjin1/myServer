var Mock = require('mockjs');

module.exports = {
    responseDesc: '成功',
    responseCode: '0000',
    questionList: Mock.mock({
        'list|3-5': [{
            'askQuestion': Mock.Random.cparagraph(1),
            'replyQuestion': Mock.Random.cparagraph(1)
        }]
    }).list
}
