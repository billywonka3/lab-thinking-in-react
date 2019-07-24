import React from 'react';
// import '../../App.css';
import './productRow.css';


function ProductRow(props){
    return(
        <div className="row">
             <p> {props.eachProduct.name} </p>   <p> {props.eachProduct.price} </p>
        </div>
    )
}
    
export default ProductRow;