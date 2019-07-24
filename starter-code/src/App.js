import React, { Component } from 'react';
import allTheData from './data.json'

import FilterableProductTable from './components/FilterableProductTable';
// import Search from './components/Search';
// import ProductTable from './components/ProductTable';
// import ProductRow from './components/ProductRow';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      allTheData: allTheData,
      
    }
  }

  
  render() {
    return (
      <div className="App">
        <FilterableProductTable products={ allTheData } />
      </div>
    );
  }
}

export default App;