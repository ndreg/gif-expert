import {useState} from 'react';

const GifExpert = () => {

  
  const [categories, setCategories] = useState(['Jujutsu Kaisen', 'One Piece', 'Cats']);

  const handleAdd = () => {
    setCategories(cats => [...cats, 'HunterxHunter']);
  }

  return (
  <>
  <h2>Gif Expert App</h2>
  <hr/>
  <ul>
  {
    categories.map(element => <li key={element}>{element}</li>)
  }
  </ul>
  <button onClick={()=> handleAdd()}>Add a new category</button>
  </>
  )
};

export default GifExpert;