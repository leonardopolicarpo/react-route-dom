import { Outlet, useParams, useSearchParams } from 'react-router-dom';
import './style.css'

export const Posts = () => {
  const params = useParams();
  const { id } = params;  
  const [qs] = useSearchParams();
  
  return (
    <>
      <h1>Posts {`Param: ${id}`} {`QS: ${qs.get('page')}`}</h1>
      <Outlet />
    </>
  )
}