
import './App.css';
import { useState } from 'react';


function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: ""
  })

  function changeHandler(event) {
    const { name, type, value, checked } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }
  return (
    <div className='flex flex-col items-center'>
      <form>
        <label htmlFor='firstName'>First name</label>
        <br />
        <input
          type='text'
          name='firstName'
          id='firstName'
          placeholder='Massao'
          value={formData.firstName}
          onChange={changeHandler}
          className='outline'
        />

        <label htmlFor='lastName'>Last name</label>
        <br />
        <input
          type='text'
          name='lastName'
          id='lastName'
          placeholder='last name'
          value={formData.lastName}
          onChange={changeHandler}
          className='outline'
        />
      </form>
    </div>
  );
}

export default App;
