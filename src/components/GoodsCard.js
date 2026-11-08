import React from 'react';

// GoodsCard - картка товару; фото, назва і ціна передаються через props
function GoodsCard({ image, name, price }) {
  return (
    <div className="goods-card">
      <img src={image} alt={name} />
      <h3 className="goods-name">{name}</h3>
      <p className="goods-price">Ціна: {price} грн</p>
    </div>
  );
}

export default GoodsCard;
