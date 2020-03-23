import React from 'react';
import { view as Todos } from './todos/';
import { view as Filters } from './filters';
function TodoApp(){
  return (
    <div>
      <Todos/>
      <Filters/>
    </div>
  );
}

export default TodoApp;