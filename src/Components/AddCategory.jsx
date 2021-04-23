import { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {
  
  const [inputValue, setInputValue] = useState('')

  const handleValue = e => {
    setInputValue(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    if(inputValue.trim().length > 0){
      setCategories(category => [inputValue, ...category]);
      setInputValue('');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form-area">
      <input 
        className="input--text" 
        type="text"
        value={inputValue}
        onChange={handleValue}
      />
      <button className="input--search">Search</button>
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
}

export default AddCategory;