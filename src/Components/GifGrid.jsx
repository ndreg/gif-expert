import {useState, useEffect} from 'react';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs();
  }, [])

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
    setImages(gifs)
}

  return (
    <>
    <h3>{category}</h3>
    <div className="gif-grid">
    {
      images.map(img => (
        <GifGridItem
          key={img.id}
          {...img}
          />
      ))
    }
    </div>
    </>

  )

}