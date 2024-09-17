import './App.css';
import { AppUI } from './AppUI';
import { TaskProvider } from '../Context';

function App() {

  return (
    <TaskProvider>
      <AppUI />
    </TaskProvider>
  )
}

export default App;
