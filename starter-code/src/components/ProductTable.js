import React, { Component } from 'react';
// import '../../App.css';
import './productTable.css';
import allTheData from '../data.json'
import ProductRow from './ProductRow';

class ProductTable extends Component {
    constructor(props){
      super(props)
      this.state = {
        allTheData: allTheData,
        visibleData : allTheData,
        
      }
    }

    displayAllProducts = () => {
        return this.state.visibleData.map((eachProduct, i)=>{
        return <ProductRow 
            key={i}
            productName = {eachProduct.name}
            productPrice = {eachProduct.price}
        />
        })
    }

    render() {
        return(

            <div className="product-table">
                <div className="row">
                    <b> Name </b>   <b> Price </b>
                </div>

                    {/* <ProductRow  products = {this.props.products}/> */}
                    {this.displayAllProducts()}

            </div>

        )
    }
}
    
export default ProductTable;