import React, { Component } from 'react';
// import '../../App.css';
import './productTable.css';
// import allTheData from '../data.json'
import ProductRow from './ProductRow';

class ProductTable extends Component {
    constructor(props){
      super(props)
      this.state = {
        products : this.props.dataholder
        // allTheData: allTheData,
        // visibleData : allTheData,
        
      }
    }

    displayAllProducts = () => {
        return this.state.products.map((eachProduct, i)=>{
        return <ProductRow 
            key={i}
            // productName = {eachProduct.name}
            eachProduct = {eachProduct}
        />
        })
    }

    render() {
        return(

            <div className="product-table">
                <div className="row">
                    <b> Name </b>   <b> Price </b>
                </div>

                    {this.displayAllProducts()}
                    

            </div>

        )
    }
}
    
export default ProductTable;