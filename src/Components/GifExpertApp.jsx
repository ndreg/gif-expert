import {useState} from 'react';
import AddCategory from './AddCategory';
import { GifGrid } from './GifGrid';

const GifExpert = () => {

  const [categories, setCategories] = useState([''])

  const handleDelete = () => {
    setCategories([]);
  }

  return (
  <>
  <div className="search-area">
  <h2 className="title-app">Gif Expert App</h2>
  <AddCategory setCategories={setCategories}/>
  </div>
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