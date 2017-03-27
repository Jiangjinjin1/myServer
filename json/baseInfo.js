var Mock = require('mockjs');
module.exports = {
    responseDesc: '成功',
    responseCode: '0000',
    list: [{
        productId: 0,
        title: Mock.Random.cparagraph(2),
        selled: 11,
        img: [{
            name: 'img1',
            src: 'http://panwanchang.com/img/2.jpg'
        }, {
            name: 'img1',
            src: 'http://panwanchang.com/img/2.jpg'
        }, {
            name: 'img1',
            src: 'http://panwanchang.com/img/2.jpg'
        }, {
            name: 'img1',
            src: 'http://panwanchang.com/img/2.jpg'
        }],
        priceList:{
        	orgPrice:666,
        	nowPrice:555
        }
    }]
}
