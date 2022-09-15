/* eslint-disable react/prop-types */
import { useState } from 'react';

const Header = ({ setTask }) => {
  const reset = {
    input1: '',
  };

  const [form, setFormState] = useState(reset);

  const handleAdd = () => {
    if (form.input1 !== "") {
      setTask({
        Text: (form.input1)
      });
      setFormState(reset);
    } else {
      window.alert('Introduzca una tarea');
    }
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <form>
            <div className='row'>
              <div className='col'>
                <input className='inputd' type='text' placeholder='Introduzca una tarea' name='input1'>
                </input>
              </div>
            </div>
            <div className='row'>
              <div className='col'>
                <button type='button' className='btn btn-primary' onClick={handleAdd}> Add </button>
              </div>
              <div className='col'>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;

