import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

class App extends React.Component {
  render () {
    return (
      <ul> {Task('teste')}
      </ul>
    );
  }

}


export default App;
