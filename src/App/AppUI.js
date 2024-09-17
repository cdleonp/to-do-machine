import { TaskCounter } from '../Components/TaskCounter';
import { TaskSearch } from '../Components/TaskSearch';
import { TaskList } from '../Components/TaskList';
import { TaskItem } from '../Components/TaskItem';
import { CreateTaskButton } from '../Components/CreateTaskButton';
import { MDBContainer, MDBRow, MDBCol, MDBTypography } from 'mdb-react-ui-kit';
import { LoadingTasks } from '../Components/LoadingTasks';
import { LoadingError } from '../Components/LoadingError';
import { EmptyTasks } from '../Components/EmptyTasks';
import { TaskContext } from '../Context';
import { AddTaskModal } from '../Components/AddTaskModal';
import { AddTaskForm } from '../Components/AddTaskForm';
import {
  MDBModal,
  MDBModalDialog,
} from 'mdb-react-ui-kit';

function AppUI() {    
    return (
    <>
      <MDBContainer className="board" breakpoint='sm'>
        <MDBRow className='h-100 d-flex justify-content-center align-items-center'>
          <MDBCol md='8' lg='6' className='text-center bg-secondary bg-gradient bg-opacity-50 text-white rounded-5'>
            <MDBTypography tag='h1' className='board_title'>
              Task list
            </MDBTypography>
            <TaskContext.Consumer>
              {({
                loading,
                error,
                filteredTasks,
                toggleCompleteTask,
                deleteTask,
                openModal,
                toggleOpen,
              }) => (
                <>
                  {loading && <LoadingTasks/>}
                  {error && <LoadingError/>}
                  {!loading && <TaskCounter />}
                  {!loading && <TaskSearch />}            
                  {!loading && <TaskList>
                    {(!loading && filteredTasks.length === 0) && <EmptyTasks/>}
                    {
                      filteredTasks.map(task => (
                        <TaskItem key={task.text} text={task.text} completed={task.completed} onComplete={() => toggleCompleteTask(task.text)} onDelete={() => deleteTask(task.text)}/>
                      ))
                    }
                  </TaskList>}
                  {!loading && <CreateTaskButton/>}
                  {openModal && (
                    <AddTaskModal>
                      <MDBModal tabIndex='-1' open={openModal} onClose={toggleOpen}>
                        <MDBModalDialog centered>
                          <AddTaskForm />                      
                        </MDBModalDialog>
                      </MDBModal>
                    </AddTaskModal>
                    )}
                </>
              )}
              </TaskContext.Consumer>
            </MDBCol>
          </MDBRow>
      </MDBContainer>
    </>
    );
}

export { AppUI };