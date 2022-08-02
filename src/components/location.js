import MapImage from '../images/map.svg';

function Location() {
    return (
        <div className="location" id="location">
            <h1 className="text-xl lg:text-2xl xl:text-3xl text-center mb-10">Контакты</h1>
            <div className="container mx-auto flex flex-col-reverse mt-5 md:flex-row items-center space-y-0 ">
                <div className="md:w-1/2 text-left text-lg">
                    <p> Адрес: Тверь, Волоколамское шоссе, 60/2 </p>
                    <p> Телефон: +7 (915) 721-03-45 </p>
                    <p> Электронная почта: mail@avtoded69.ru </p>
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

