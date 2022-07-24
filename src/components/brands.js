import Gaz from '../images/gaz.svg';
import Vaz from '../images/lada.svg';
import Uaz from '../images/uaz.svg';

function Brands() {
    return (
        <div className="mb-5">
            <h1 className="mx-auto font-bold text-2xl p-5"> Бренды </h1>
            <div className="mx-auto container flex flex-col mt-5 md:flex-row items-center space-y-0 gap-20">
                <div className="w-full md:w-1/3 px-12 md:px-5 lg:px-10">
                    <img src={Vaz} className="w-96 h-auto" alt="vaz"/>
                </div>

                <div className="w-full md:w-1/3 px-12 md:px-5 lg:px-10">
                    <img src={Gaz} className="w-full h-auto" alt="gaz"/>
                </div>

                <div className="w-full md:w-1/3 px-12 md:px-5 lg:px-10">
                    <img src={Uaz} className="w-full h-auto" alt="uaz"/>
                </div>
            </div>
        </div>
    );
}

export default Brands;