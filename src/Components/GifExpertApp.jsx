import {useState} from 'react';
import AddCategory from './AddCategory';

const GifExpert = () => {

  const [categories, setCategories] = useState([])

  const handleDelete = () => {
    setCategories([]);
  }

  return (
  <>
  <h2>Gif Expert App</h2>
  <AddCategory setCategories={setCategories}/>
  <button onClick={handleDelete}>Clean historial!</button>
  <ul>
  {
    categories.map(category => <li key={category}>{category}</li>)
  }
  </ul>
  </>
  )
};

export default GifExpert;