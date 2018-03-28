import utils  from '../callApi';

export const PRODUCT_LIST = 'PRODUCT_LIST';

export function getProducts() {
    return (dispatch) => {
        utils.httpRequest('/getProducts', 'get', {}, function(res) {
            if(res.error === undefined) {
                dispatch(productList(res))
            }           
        })        
    }
}



export function saveProductRequest(data, cb) {
    return (dispatch) => {
        if(data['_id'] === undefined) {
            utils.httpRequest('/createProduct', 'post', data, function(res) {
                dispatch(productList(res));
                cb()
            })
        } else {
            let id = data['_id'];
            delete data['_id'];
            utils.httpRequest('/updateProduct/'+ id, 'put', data, function(res) {
                dispatch(productList(res));
                cb()
            })
        }
    }
}

export function deleteProductRequest(id) {
    return (dispatch) => {
        utils.httpRequest('/deleteProduct/'+id, 'delete', {} , function(res) {
            dispatch(productList(res));
        })
    }
}

/*Action Creators*/

function productList(data) {
    return {
        type : PRODUCT_LIST,
        data
    }    
}