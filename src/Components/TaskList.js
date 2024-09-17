import './styles.css';
import { MDBListGroup } from 'mdb-react-ui-kit';

function TaskList({children}) {
    return (
      <MDBListGroup numbered className='list my-4'>
        {children}
      </MDBListGroup>
    );
  }

  export { TaskList }