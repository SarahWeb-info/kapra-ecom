export default function TruncateText(text, maxTextLength) {
  
  if (text.includes('-')) {
    text = text.split('-')[1];
  }

  if (text.length > maxTextLength) {
      text = text.substring(0, maxTextLength - 3) + '...';
  }

  return text;
}