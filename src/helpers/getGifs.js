export const getGifs = async(category)=> {
  let url = await fetch(`https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&api_key=IBnVIMwRONZOYHwLyV8PTX9kflzRGHyG&limit=10`)
  let {data} = await url.json();
  let gifs = data.map(img => {
    return {
      id: img.id,
      title: img.title,
      gif: img.images.downsized_medium.url,
    }
  })
  return gifs
}