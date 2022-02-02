import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tarefas = ['tomar café', 'estudar', 'fazer almoço', 'aula']
class App extends React.Component {
  render () {
    return (
      <>
      <h1> Tarefas </h1>
      <ul> {Task(tarefas.map((tarefa) => Task(tarefa)))} </ul>
      </>
    );
  }
}


export default App;
