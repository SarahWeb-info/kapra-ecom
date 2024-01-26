import React , { useContext , useEffect, useState  } from 'react';
import context from '../context/globalContext/globalContext';

export default function FadeBg() {
    const {closeBtnFunc} = useContext(context);
    const [position , setPosition ] = useState('translateY(-100vh)');

    useEffect(() => {
      return () => {
        setPosition('translateY(0)')
      };
    }, []);

  return (
    <div className='fadeBg' onClick={closeBtnFunc} style={{transform:`${position}`}}></div>
  )
}
