import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import {Header, Title, Body, Footer} from 'react-bootstrap/lib/Modal';

const ModalComponent = (props) => {
    let data = props.data;
    return (
        <Modal show={true} onHide={(e) => props.createProductHandler()}>
            <Body>                   
                <form className='whiteCard'>    
                    <span className='errClass'>{data.error}</span>            
                    <input type='text' className='form-control inputForm' placeholder="Title" value={data.title} onChange={(e) => props.handleInputValue('title', e.target.value)}/>
                    <input type="text" className='form-control inputForm' placeholder='Price' value={data.price} onChange={(e) => props.handleInputValue('price', e.target.value)} />
                    <input type='number' className='form-control inputForm' placeholder='Quantity' min='0' value={data.quantity} onChange={(e) => props.handleInputValue('quantity', e.target.value)} />
                    <input type='text' className='form-control inputForm' placeholder='URL' value={data.url} onChange={(e) => props.handleInputValue('url', e.target.value)} />
                    <textarea placeholder='Description' className='form-control inputForm' value={data.description} onChange={(e) => props.handleInputValue('description', e.target.value)} ></textarea>
                    <Button className='btn btn-primary pull-right' onClick={(e) => props.saveProduct()}>Save</Button>
                    <Button className='btn btn-default pull-right' onClick={(e) => props.createProductHandler()}>Cancel</Button>                
                </form> 
            </Body>
        </Modal>                
    )    
}

export default ModalComponent