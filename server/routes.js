var express = require('express');
var router = express.Router();
var Products = require('./models/productSchema');
var mongoose = require('mongoose');

router.get('/getProducts', function(req, res) {
    Products.find({},function(err, data) {
        if(err) {
            res.json({
                error : err.message || 'failed to get product'
            })
        } else  {
            res.status(200).json(data)
        }  
    })
});

router.post('/createProduct', function(req, res) {
    Products.create(req.body, function(err, createdData) {
        if(err) {
            res.json({
                error : err.message || 'failed to create product'
            })
        } else  {
            Products.find({},function(err, data) {
                if(err) {
                    res.json({
                        error : err.message || 'failed to create product'
                    })
                } else  {
                    res.status(200).json(data)
                }  
            })
        }        
    })
})

router.delete('/deleteProduct/:id', function(req, res) {
    Products.remove({_id : req.params.id}, function(err, deleted) {
        if(err) {
            res.json({
                error : err.message || 'failed to delete product'
            })
        } else  {
            Products.find({},function(err, data) {
                if(err) {
                    res.json({
                        error : err.message || 'failed to create product'
                    })
                } else  {
                    res.status(200).json(data)
                }  
            })
        }   
    })
});

router.put('/updateProduct/:id', function(req, res) {
    Products.update(
        {"_id" : req.params.id},
        {$set:
            {
                title : req.body.title,
                price : req.body.price,
                quantity : req.body.quantity,
                description : req.body.description,
                url : req.body.url
            }
        }, function(err, modifiedData) {
            if(err) {
                res.json({
                    error : err.message || 'failed to update product'
                })
            } else  {
                Products.find({},function(err, data) {
                    if(err) {
                        res.json({
                            error : err.message || 'failed to  product'
                        })
                    } else  {
                        res.status(200).json(data)
                    }  
                })
            }   
        }
    )
})

module.exports = router;