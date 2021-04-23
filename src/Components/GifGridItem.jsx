export const GifGridItem = ({title, gif}) => {
  
  return (
    <div className="gif-card">
      <img src={gif} alt={title}/>
      <p>{title}</p>
    </div>
  )
}
