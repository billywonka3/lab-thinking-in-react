import React from 'react';
// import '../../App.css';
import './productRow.css';


function ProductRow(props){
    return(
        <div className="row">
             <p> {props.name} </p>   <p> {props.price} </p>
        </div>
    )
}
    
export default ProductRow;