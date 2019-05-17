import React, { Component } from 'react';
import Items from './Items';
import '../css/table.css';

class Table extends Component {
  state = {
    searchValue: ''
  }

  handleSearch = e => {
    const value = e.target.value.toLowerCase();
    if (/\S/.test(value)) {                         // is value 'a space'?
      this.setState({searchValue: value});
    } else {
      this.setState({searchValue: ''});
    }
  };

  render() {
    return (
      <div className="table-wrapper">
        <input type="text" className="search" placeholder="Search" value={this.state.searchValue} onChange={this.handleSearch} />
        <table className="table">
           <thead className="table__head">
              <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Price</td>
                <td>Quantity</td>
              </tr>
           </thead>

           <tbody className="table__body">
             <Items searchValue={ this.state.searchValue } />
           </tbody>

        </table>
      </div>
    )
  }
}

export default Table;
