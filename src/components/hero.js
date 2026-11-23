import CarImage from '../images/car.svg';
import {mapUrl, phoneUrl} from './location';

export default function Hero() {
    return <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
            <h1 id="hero-title"><span>Автозапчасти</span> для отечественных автомобилей</h1>
            <p>Поможем подобрать деталь для вашего автомобиля</p>
        </div>
        <div className="hero-art"><img src={CarImage} alt=""/></div>
        <div className="hero-actions">
            <a className="action primary" href={phoneUrl}>Узнать наличие</a>
            <a className="action" href={mapUrl}>Как добраться</a>
        </div>
    </section>;
}
