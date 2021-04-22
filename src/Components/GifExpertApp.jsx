import {useState} from 'react';
import AddCategory from './AddCategory';

const GifExpert = () => {

  // const [categories, setCategories] = useState(['Jujutsu Kaisen', 'One Piece', 'Cats']);


  return (
  <>
  <h2>Gif Expert App</h2>
  <AddCategory />
  <ul>
  {
    // categories.map(element => <li key={element}>{element}</li>)
  }
  </ul>
  </>
  )
};

export default GifExpert;