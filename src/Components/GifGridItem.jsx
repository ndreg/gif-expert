export const GifGridItem = ({title, gif}) => {
  
  return (
    <div className="gif-card animate__animated animate__fadeIn">
      <img src={gif} alt={title}/>
      <p>{title}</p>
    </div>
  )
}
