import CarImage from '../images/car.svg';

function Hero(){
    return(
        <section>
            <div className="container mx-auto flex flex-col-reverse mt-5 md:flex-row items-center space-y-0 ">
                <div className="md:w-1/2">
                    <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl my-10 text-center">Автозапчасти для отечественных автомобилей</h1>
                    <p className="text-center pb-8 text-sm px-1 md:text-xl xl:text-2xl">Поможем подобрать наилучший вариант для Вашего автомобиля!</p>
                </div>
                <div className="md:w-1/2">
                    <img src={CarImage} className="w-full h-auto" alt="car"/>
                </div>
            </div>
        </section>
    );
}

export default Hero;