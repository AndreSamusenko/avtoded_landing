import MapImage from '../images/map.svg';

export const phoneUrl = 'tel:+79157210345';
export const mapUrl = 'https://yandex.ru/maps/?rtext=~' + encodeURIComponent('Тверь, Волоколамское шоссе, 60/2');

function Location() {
    return (
        <div className="location" id="location">
            <h1 className="text-xl lg:text-2xl xl:text-3xl text-center mb-10">Контакты</h1>
            <div className="container mx-auto flex flex-col-reverse mt-5 md:flex-row items-center space-y-0 ">
                <div className="md:w-1/2 text-left text-lg">
                    <p> Адрес: <a href={mapUrl}>Тверь, Волоколамское шоссе, 60/2</a> </p>
                    <p> Телефон: <a href={phoneUrl}>+7 (915) 721-03-45</a> </p>
                    <p> Электронная почта: <a href="mailto:mail@avtoded69.ru">mail@avtoded69.ru</a> </p>
                </div>
                <div className="md:w-1/2">
                    <div className="w-full">
                        <img src={MapImage} className="w-full h-auto p-16" alt="car"/>
                    </div>
                </div>
            </div>


        </div>


    );
}


export default Location;

