import React, { Component } from 'react';
import ListProducts from './ListProducts';
import Modal from './Modal';
import { connect } from 'react-redux';
import { getProducts, saveProductRequest, deleteProductRequest } from '../actions';

class ProductsApp extends Component {
    constructor() {
        super();
        this.state ={
            modal : false,
            data : {
                title : '',
                price : '',
                quantity : '',
                url : '',
                description : '',
                error : ''
            },
        }

        this.createProduct = this.createProduct.bind(this);
        this.editProduct = this.editProduct.bind(this);
        this.handleInputValue = this.handleInputValue.bind(this);
        this.saveProduct = this.saveProduct.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(getProducts())
    }

    createProduct(e) {
        this.setState({
            modal : !this.state.modal,
            data : {
                title : '',
                price : '',
                quantity : '',
                url : '',
                description : '',
                error : ''
            },
        })
    }

    editProduct(data) {
        this.setState({
            modal : !this.state.modal,
            data : Object.assign({}, data)
        })
    }

    handleInputValue(field, value) {
        let obj = this.state.data;
        obj[field] = value;
        obj['error'] = '';
        this.setState({
            data : obj
        })
    }

    saveProduct(e) {
        let state = this.state.data;
        let formValidator = state['title'] && state['price'] && state['quantity'] && state['url'] && state['description'];
        if(formValidator) {
            delete state['error'];
            this.props.dispatch(saveProductRequest(state, function() {
                this.setState({
                    modal : !this.state.modal,
                    data : {
                        title : '',
                        price : '',
                        quantity : '',
                        url : '',
                        description : '',
                        error : ''
                    },
                })
            }.bind(this)));
        } else {
            let obj = this.state.data;
            obj['error'] = '*Please fill all fields'; 
            this.setState({data : obj})
        }
    }

    deleteProduct(id) {
        this.props.dispatch(deleteProductRequest(id));
    }

    render() {
        return (
            <div>
                {this.state.modal && <Modal createProductHandler={this.createProduct} data={this.state.data} handleInputValue={this.handleInputValue} saveProduct={this.saveProduct} />}
                {!this.state.modal && <ListProducts createProductHandler={this.createProduct} listData={this.props.productsList} editProduct={this.editProduct} deleteProduct={this.deleteProduct} />}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        productsList : state.productAppReducer.productsList
    }
}

export default connect(mapStateToProps)(ProductsApp)