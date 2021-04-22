import { useState } from 'react';

const AddCategory = () => {
  
  const [value, setValue] = useState('')

  const handleValue = e => {
    setValue(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();

    console.log('Submit done.')
  }
  return (
    <form onSubmit={handleSubmit}>
      <input 
        className="input--text" 
        type="text"
        value={value}
        onChange={handleValue}
      />
      <button>Add a new category!</button>
    </form>
  )
}

export default AddCategory;