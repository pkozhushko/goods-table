import React, { Component, Fragment } from 'react';
import '../css/items.css';


class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: arr
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.searchValue !== prevProps.searchValue) {
      let query = this.props.searchValue;
      let filter = arr.filter(function(el) {
        var name = el.name.toLowerCase();
        return name.indexOf(query) !== -1;
      });
      this.setState({ products: filter });
    }
  }

  render() {
    if (this.state.products.length === 0) {
      return (
        <tr>
            <td className="item__id">-</td>
            <td className="item__name">-</td>
            <td className="item__price">-</td>
            <td className="item__quantity">-</td>
        </tr>
      )
    } else {
      return (
        <Fragment>
          { this.state.products.map(item => (
              <tr key={item.id} className="item">
                <td className="item__id">{item.id}</td>
                <td className="item__name">{item.name}</td>
                <td className="item__price">{item.price}</td>
                <td className="item__quantity">{item.quantity}</td>
              </tr>
          ))}
        </Fragment>
      )
    }
  }
}

const arr = [
  {
    "id": 1,
    "name": "Play Station 4",
    "price": 500.00,
    "quantity": 3,
  },
  {
    "id": 2,
    "name": "iPhone XS",
    "price": 1000.00,
    "quantity": 2,
  },
  {
    "id": 3,
    "name": "Samsung Galaxy S10",
    "price": 1000.00,
    "quantity": 5,
  }
]

export default Items;
