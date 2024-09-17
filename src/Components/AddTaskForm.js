import React, { useContext, useState } from 'react';
import {
    MDBBtn,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBTextArea,
  } from 'mdb-react-ui-kit';
import { TaskContext } from '../Context';

function AddTaskForm() {
    const {
        toggleOpen,
        setOpenModal,
        addNewTask,
    } = useContext(TaskContext);
const [tasksName, setTasksName] = useState('');
    const onSubmit = (event) => {
        event.preventDefault();
        // console.log('Clic en crear');
        addNewTask(tasksName);
        setOpenModal(false);

    }
    const onChange = (event) => {
        console.log('Texto ingresado: ', event.target.value);
        setTasksName(event.target.value);
    }

    return (
        <form className='form' onSubmit={onSubmit}>
            <MDBModalContent className='text-black'>
                <MDBModalHeader>
                    <MDBModalTitle>Create new task</MDBModalTitle>
                    <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
                </MDBModalHeader>
                <MDBModalBody>
                    <p className='text-start mb-0'>
                    Task name
                    </p>
                    <MDBTextArea label="Go for it!" id="taskName" rows="{4}" onChange={onChange} required={true}/>
                </MDBModalBody>
                <MDBModalFooter>
                    <MDBBtn type='button' color='secondary' onClick={toggleOpen}>
                    Cancel
                    </MDBBtn>
                    <MDBBtn type='submit'>Create</MDBBtn>
                </MDBModalFooter>
            </MDBModalContent>
        </form>           
    )
}

export { AddTaskForm };