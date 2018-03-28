import React from 'react';
import { Button } from 'react-bootstrap';

const ListProducts = (props) => {       
    return (
        <div>
            <Button className='btn btn-primary btnClass' onClick={(e) => props.createProductHandler()}>Create Product</Button> 
            {props && props.listData && props.listData.length>0
            ?
            <div className='whiteCard'>
                <table>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    {props.listData.map((data, i) => {
                        return (
                            <tr key={i}>
                                <td>{data.title}</td>
                                <td>{data.price}</td>
                                <td><span class="glyphicon glyphicon-edit" onClick={(e) => props.editProduct(data)}></span></td>
                                <td><span class="glyphicon glyphicon-remove-circle" onClick={(e) => props.deleteProduct(data._id)}></span></td>
                            </tr>
                        )
                    })}                   
                </table>                                                 
            </div> 
            :
            <div className='noData'>
                No data 
            </div>}
        </div>
    )    
}

export default ListProducts