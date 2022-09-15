import { useState } from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';

function App() {
  const [task, setResultado] = useState({
    Text: '',
  });

  return (
    <div>
      <div>
        <div>
          <h2 className='app-title text-center'>My TaskList App!!!</h2>
          <Header setResultado={setResultado} />
          {task.Text !== '' ? (
            <TaskList resultado={task} />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;