import { useLocation } from 'react-router-dom';
import './style.css'

export const About = () => {
  const { state } = useLocation();

  return (
    <>
      <h1>Sobre</h1>
      {state}
    </>
  )
}