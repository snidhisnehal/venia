import React, { Component } from 'react'

export default class Filter extends Component {
  constructor() {
    super();
    this.state = {
      sort: "",
    };
  }

  render() {
    
    // const sortProducts = (event) => {
    //   const sort = event.target.value;
    //   console.log(event.target.value);
    //   this.setState((state) => ({
    //     sort: sort,
    //     products : data?.sort((a, b) => 
    //       sort === "Lowest" ?
    //         ((a.price < b.price) ? 1 : -1) :
    //         sort === "Highest" ?
    //           ((a.price > b.price) ? 1 : -1) :
    //           ((a._id > b._id) ? 1 : -1)
    //   )
    //   }));
    // };
    return (
      <>
        <select value={this.props.data} onChange={sortProducts} >
          <option>Sort by Latest</option>
          <option value="Lowest">low to high</option>
          <option value="Highest">high to low</option>
        </select>
      </>
    )
  }
}
