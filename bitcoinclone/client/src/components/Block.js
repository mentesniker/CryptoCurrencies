import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Transaction from './Transaction';

class Block extends Component {
  get displayTransaction() {
    const { data } = this.props.block;

    const stringifiedData = JSON.stringify(data);

    const dataDisplay = stringifiedData.length > 40 ?
      `${stringifiedData.substring(0, 40)}...` :
      stringifiedData;

    return (
      <div>{dataDisplay}</div>
    );
  }

  render() {
    return (
      <div className='Block'>
        {this.displayTransaction}
      </div>
    );
  }
};

export default Block;