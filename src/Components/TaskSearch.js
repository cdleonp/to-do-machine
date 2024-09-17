import './styles.css'
import { useContext } from 'react';
import { TaskContext } from '../Context';
import { MDBInput, MDBIcon } from 'mdb-react-ui-kit';

function TaskSearch() {
    const {
      searchValue,
      setSearchValue,
    } = useContext(TaskContext);
    return (
      <MDBInput className='board_search bg-primary bg-opacity-25 text-white' label="Search tasks" labelClass='text-white' id="form-icon-trailing" value = {searchValue} onChange={(event) => {
        setSearchValue(event.target.value);
      }}>
        <MDBIcon fas icon="search trailing" />
      </MDBInput>
    );
  }

  export { TaskSearch }