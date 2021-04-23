import {useState, useEffect} from 'react';

export const GifGrid = ({category}) => {

  useEffect(() => {
    getGifs();
  }, [])

  const [count, setCount] = useState(0)

  const getGifs = async()=> {
    let url = await fetch(`https://api.giphy.com/v1/gifs/search?q=Jujutsu Kaisen&api_key=IBnVIMwRONZOYHwLyV8PTX9kflzRGHyG&limit=10`)
    let {data} = await url.json();
    let gifs = data.map(img => {
      return {
        id: img.id,
        title: img.title,
        gif: img.images.downsized_medium.url,
      }
    })
    console.log(gifs)
}


  return (
    <>
    <h1>{category}</h1>
    <h2>{count}</h2>
    <button onClick={() => setCount(count+1)}>Aumenta</button>
    </>

  )

}