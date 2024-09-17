import './styles.css'
import { MDBListGroupItem, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

function TaskItem({
  text,
  completed,
  onComplete,
  onDelete,
}) {
    return (
      <MDBListGroupItem className='d-flex justify-content-between align-items-center px-3 rounded-3 mb-2 list_item' tag='label' action noBorders color={`${completed ? 'success' : 'primary'}`}>
        <div className='ms-2 me-auto'>
          <p id={text} className={`fw-bold mb-0 ${completed && 'text-decoration-line-through'}`}>
            {text}
          </p>
        </div>
        <MDBBtn className='me-1' color={`${completed ? 'warning' : 'success'}`} tag='button' id={text} floating>
          <MDBIcon fas icon={`${completed ? 'times-circle' : 'check'}`} className='fa-2x text-white' onClick={onComplete}/>
        </MDBBtn>
        <MDBBtn color='danger' tag='button' floating>
          <MDBIcon fas icon="trash-alt" className='fa-2x text-white' onClick={onDelete}/>
        </MDBBtn>
      </MDBListGroupItem>
    );
  }

  export { TaskItem }