import React from 'react';
import Image from './Image';

// набори кольорів, між якими перемикається елемент при кожному кліку
const colorsVideo = [
  { backgroundColor: '#0000ff', color: '#ffffff' },
  { backgroundColor: '#ffe08a', color: '#1a237e' },
];
const colorsDance = [
  { backgroundColor: '#22ee33', color: '#000000' },
  { backgroundColor: '#4a148c', color: '#c8e6c9' },
];

const STEP = 50;          // крок зміни ширини зображення
const MIN_WIDTH = 100;
const MAX_WIDTH = 1000;
const START_WIDTH = 600;

// Content - класовий компонент зі станом (state)
class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoClicks: 0,                // кліки на елемент №7
      danceClicks: 0,                // кліки на елемент №8
      imageVisible: true,
      imageWidth: START_WIDTH,
    };
  }

  // клік на елемент №7 ("Створення відео"): змінюємо лічильник - змінюються кольори
  handleVideoClick = () => {
    this.setState((s) => ({ videoClicks: s.videoClicks + 1 }));
  };

  // клік на елемент №8 ("Танці")
  handleDanceClick = () => {
    this.setState((s) => ({ danceClicks: s.danceClicks + 1 }));
  };

  // кнопки під зображенням
  addImage = () => {
    this.setState({ imageVisible: true, imageWidth: START_WIDTH });
  };

  increaseImage = () => {
    this.setState((s) =>
      s.imageVisible && s.imageWidth + STEP <= MAX_WIDTH
        ? { imageWidth: s.imageWidth + STEP }
        : null
    );
  };

  decreaseImage = () => {
    this.setState((s) =>
      s.imageVisible && s.imageWidth - STEP >= MIN_WIDTH
        ? { imageWidth: s.imageWidth - STEP }
        : null
    );
  };

  deleteImage = () => {
    this.setState({ imageVisible: false });
  };

  render() {
    const { videoClicks, danceClicks, imageVisible, imageWidth } = this.state;

    // перший клік - перший набір кольорів, другий - другий і т.д.
    const videoStyle = videoClicks > 0 ? colorsVideo[(videoClicks - 1) % 2] : undefined;
    const danceStyle = danceClicks > 0 ? colorsDance[(danceClicks - 1) % 2] : undefined;

    return (
      <main>
        <p>
          Дата народження: 13 травня 2007 року. Місце народження: місто Гайсин, Вінницька область.
        </p>

        <p>
          Освіта: навчалася в школі №1 (м. Гайсин). Зараз навчаюся в Національному технічному
          університеті України «Київський політехнічний інститут імені Ігоря Сікорського», м. Київ.
        </p>

        <h3>Мої хобі</h3>
        <ul>
          <li>Відеоігри</li>
          <li className="clickable" style={videoStyle} onClick={this.handleVideoClick}>
            Створення відео
          </li>
          <li className="clickable" style={danceStyle} onClick={this.handleDanceClick}>
            Танці
          </li>
        </ul>

        <h3>Мої улюблені фільми</h3>
        <ol>
          <li>Інтерстеллар</li>
          <li>Острів проклятих</li>
          <li>Сім</li>
          <li>Патруль часу</li>
        </ol>

        <h3>Моє улюблене місто</h3>
        <p>
          Моє найулюбленіше місто, де я бувала, це Рим. Це місто з багатотисячолітньою історією,
          де давні пам'ятки, як-от Колізей і Пантеон, поєднуються з сучасним життям. Мене вразили
          вузькі затишні вулички, італійська кухня та особлива атмосфера, яку відчуваєш на
          кожному кроці.
        </p>

        <Image
          src={process.env.PUBLIC_URL + '/images/rome.jpg'}
          alt="Колізей у Римі"
          href="https://uk.wikipedia.org/wiki/Рим"
          width={imageWidth}
          visible={imageVisible}
        />

        <div className="buttons">
          <button type="button" onClick={this.addImage}>Додати</button>
          <button type="button" onClick={this.increaseImage}>Збільшити</button>
          <button type="button" onClick={this.decreaseImage}>Зменшити</button>
          <button type="button" onClick={this.deleteImage}>Видалити</button>
        </div>
      </main>
    );
  }
}

export default Content;
