import './styles.css'
import { useContext } from 'react';
import { TaskContext } from '../Context';

function TaskCounter() {
  const {
    completedTasks,
    totaltasks,
  } = useContext(TaskContext);

  return (
    <h3 className={`fw-bold ${(completedTasks === totaltasks && totaltasks !== 0) ? 'board_counter' : 'text-black'}`}>
      { (completedTasks === totaltasks && totaltasks !== 0) ? '¡Congratulations, you have completed all tasks!' : 'Completed ' + completedTasks + ' of ' + totaltasks + ' tasks' }
    </h3>
  );
}

export { TaskCounter }