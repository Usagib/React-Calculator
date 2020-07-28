import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate'; // eslint-disable-line no-unused-vars
import '../index.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick(buttonName) {
    this.setState({
      total: state.total,
      next: state.next,
      operation: state.operation,
    })
  }
  
  render() {
    return (
      <div id="Calcualtor">
        <Display />
        <ButtonPanel />
      </div>
    );
  }

}
