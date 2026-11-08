import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import GoodsCard from './components/GoodsCard';
import './App.css';

// дані для галереї товарів (завдання 2)
const goods = [
  { id: 1, image: process.env.PUBLIC_URL + '/images/goods/gamepad.svg',  name: 'Геймпад',          price: 1599 },
  { id: 2, image: process.env.PUBLIC_URL + '/images/goods/headset.svg',  name: 'Ігрова гарнітура', price: 2299 },
  { id: 3, image: process.env.PUBLIC_URL + '/images/goods/mouse.svg',    name: 'Ігрова миша',      price: 999 },
  { id: 4, image: process.env.PUBLIC_URL + '/images/goods/keyboard.svg', name: 'Клавіатура',       price: 1899 },
  { id: 5, image: process.env.PUBLIC_URL + '/images/goods/monitor.svg',  name: 'Монітор 27"',      price: 8499 },
  { id: 6, image: process.env.PUBLIC_URL + '/images/goods/chair.svg',    name: 'Геймерське крісло', price: 5699 },
];

function App() {
  return (
    <div>
      {/* Завдання 1: компоненти Header, Content, Image */}
      <Header title="Сторінка про автора" name="Хитрук Єлизавета Ігорівна" />
      <Content />

      {/* Завдання 2: галерея товарів на основі GoodsCard і props */}
      <section className="gallery-section">
        <h2>Завдання 2. Галерея товарів</h2>
        <div className="gallery">
          {goods.map((item) => (
            <GoodsCard
              key={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
