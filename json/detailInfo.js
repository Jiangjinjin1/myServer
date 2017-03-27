var Mock = require('mockjs');
module.exports = {
    responseDesc: '成功',
    responseCode: '0000',
    product:{
        id:'123',
        title:Mock.Random.cparagraph(2),
        desc:Mock.Random.cparagraph(1),
        sales:456,
        price:{
            orgPrice:666,
            nowPrice:555
        },
        packing:Mock.Random.cparagraph(3),
        nom:Mock.Random.cparagraph(2),
        imageDetail:Mock.Random.cparagraph(1)
    }
}
