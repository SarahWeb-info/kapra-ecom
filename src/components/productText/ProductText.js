import React , { useState , useEffect } from 'react';
import TruncateText from './TrancateText';

import './productText.css';

export default function ProductText({ textClass = "" , text = "" , maxTextLength = 200 }) {
    
    const [shortenedText, setShortenedText] = useState(text);

    useEffect(() => {
      return () => {

        if ( text.length > maxTextLength) {
           setShortenedText( TruncateText( text , maxTextLength ) );
        }

      };
    }, []);

  return (
    <span className={`${textClass}`}>{shortenedText}</span>
  )
}
