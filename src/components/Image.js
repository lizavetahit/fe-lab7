import React from 'react';

// Image - функціональний компонент: фото-посилання, розмір і видимість приходять через props
function Image(props) {
  if (!props.visible) {
    return null;                       // зображення видалене - нічого не малюємо
  }

  return (
    <div id="photo-box">
      <a href={props.href} target="_blank" rel="noopener noreferrer">
        <img src={props.src} alt={props.alt} width={props.width} />
      </a>
    </div>
  );
}

export default Image;
