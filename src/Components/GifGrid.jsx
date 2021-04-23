import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

  const {data:img, loading} = useFetchGifs(category);

  return (
    <>
    <h3>{category}</h3>
    {loading && <h3>Cargando...</h3>}
    <div className="gif-grid">
    {
      img.map(img => (
        <GifGridItem
          key={img.id}
          {...img}
          />))
    }
    </div>
    </>
  )
}