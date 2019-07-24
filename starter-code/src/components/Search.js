import React, { Component } from 'react';
import allTheData from '../data.json'
// import '../../App.css';
import './search.css';

class Search extends Component {
    constructor(props){
      super(props)
      this.state = {
        allTheData: allTheData,
        visibleData : allTheData,
        
      }
    }

    search = (e) => {
        let clone = [...this.state.allTheData]
        let searchTerm = e.target.value;

        let filteredList = clone.filter((eachProduct)=>{
            return eachProduct.name.toUpperCase().includes(searchTerm.toUpperCase())
        })

        this.setState({
            visibleData: filteredList, 
            searchTerm: e.target.value
        })
    }

    render() {
        return(
            <div className="search">
                <p> Search </p>
                <input 
                    className="input search" 
                    placeholder="Enter a Search Term" 
                    onChange={this.props.search} 
                    // value={this.props.state.searchTerm}
                />
            </div>
        )
    }
}


// function Search(props){

//     return(
//         <div className="search">
//             <p> Search </p>
//             <input 
//                 className="input search" 
//                 placeholder="Enter a Search Term" 
//                 onChange={this.props.search} 
//                 value={this.props.state.searchTerm}
//             />
//         </div>
//     )
// }
    
export default Search;