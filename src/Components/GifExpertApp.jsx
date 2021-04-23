import {useState} from 'react';
import AddCategory from './AddCategory';
import { GifGrid } from './GifGrid';

const GifExpert = () => {

  const [categories, setCategories] = useState(['HxH'])

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
    categories.map(category => <GifGrid 
      key={category}
      category={category}/>)
  }
  </ul>
  </>
  )
};

export default GifExpert;