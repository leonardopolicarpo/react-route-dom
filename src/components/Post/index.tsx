import { useParams } from 'react-router-dom';
import './style.css'

export const Post = () => {
  const params = useParams();
  const { id } = params;

  return (
    <>
      <p>Post {id}</p>
    </>
  )
}