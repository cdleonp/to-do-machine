import './styles.css'
import React, { useContext } from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import { TaskContext } from '../Context';

function CreateTaskButton() {
    const { toggleOpen } = useContext(TaskContext);
    return (
        <MDBBtn className='my-3' onClick={toggleOpen}>Add task</MDBBtn>
    );
  }

  export { CreateTaskButton }