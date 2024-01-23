import React , { useContext , useEffect, useState  } from 'react';
import context from '../context/frontend/context';

export default function FadeBg() {
    const {closeBtn} = useContext(context);
    const [position , setPosition ] = useState('translateY(-100vh)');

    useEffect(() => {
      return () => {
        setPosition('translateY(0)')
      };
    }, []);

  return (
    <div className='fadeBg' onClick={closeBtn} style={{transform:`${position}`}}></div>
  )
}
