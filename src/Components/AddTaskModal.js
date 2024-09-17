import './styles.css'
import React from 'react';
import { createPortal } from 'react-dom';

function AddTaskModal({ children}) {
    /* createPortal recibe 2 parámetros: el contenido a mostrar y en donde queremos mostrarlo */
    return createPortal(
        <div className='add-task-modal'>
            {children}
        </div>,
        document.getElementById('modal-root')
    );
  }

  export { AddTaskModal }