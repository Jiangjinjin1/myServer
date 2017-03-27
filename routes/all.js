var express = require('express');
var router = express.Router();
var fs = require('fs');
var baseInfo=require('../json/baseInfo.js');
var detailInfo=require('../json/detailInfo.js');
var questions=require('../json/consults.js');
var scThrcategory=require('../json/scThrcategory.js');
var threeCategory=require('../json/threeCategory.js');
var scFilter=require('../json/scFilter.js');
var scSerach=require('../json/scSerach.js');


router.use(function(req, res, next) {
    res.set({
        "Access-Control-Allow-Origin": "*"
    })
    next()
})

router.all('/product/baseInfo',(req,res)=>{
    res.json(baseInfo)
});
router.all('/product/detailInfo',(req,res)=>{
    res.json(detailInfo)
});

router.all('/question/getQuestions',(req,res)=>{
    res.json(questions)
});
router.all('/scThrcategory', function(req, res, next) {
    var data ;
    var ScThrcategory1 = scThrcategory;
    var params = req.query;
    if(JSON.stringify(params) == '{}') {
        data = ScThrcategory1.data;
    }else {
        data = ScThrcategory1.data2[params.id];
    }

    var response = {code:10000,list:data};
    res.json(response);

});

router.all('/threeCategory', function(req, res, next) {
    var data ;
    var ThreeCategory = threeCategory;
    var params = req.query;
    console.log(params)
    if(JSON.stringify(params) == '{}' || params.id == 1) {
        data = ThreeCategory.data1;
    }else if(params.id == 2) {
        data = ThreeCategory.data2;
    }else if(params.id == 3) {
        data = ThreeCategory.data3;
    }else if(params.id == 4) {
        data = ThreeCategory.data4;
    }else if(params.id == 5) {
        data = ThreeCategory.data5;
    }
    var response = {code:10000,list:data};
    res.json(response);

});

router.all('/scFilter', function(req, res, next) {
    var data ;
    var Filter = scFilter;
    var params = req.query;
    console.log(params)
    if(JSON.stringify(params) == '{}' || params.id == 1) {
        data = Filter.data;
    }
    var response = {code:10000,list:data};
    res.json(response);

});

router.all('/scSearch', function(req, res, next) {
    var data ;
    var Searching = scSerach;
    var params = req.query;
    console.log(params)
    if(JSON.stringify(params) == '{}' || params.id == 1) {
        data = Searching.data1;
    }else if(params.id == 2) {
        data = Searching.data2;
    }else if(params.id == 3) {
        data = Searching.data3;
    }
    var response = {code:10000,list:data};
    res.json(response);

});

module.exports = router;
