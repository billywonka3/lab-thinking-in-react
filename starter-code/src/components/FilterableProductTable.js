import React, { Component } from 'react';
// import '../../App.css';
import './filterableProductTable.css';

import Search from './Search';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {

    
    render() {
    return(

        <div className="filterable">
            <h1> IronStore </h1>
            <div>
                <Search />
            </div>
            <div>
                <ProductTable dataholder = {this.props.products.allTheData} />
            </div>
        </div>
       
    )
    }
}
    
export default FilterableProductTable;