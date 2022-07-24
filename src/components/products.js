function Products(){
    return(
        <div className="py-5">
            <h1 className="mx-auto font-bold text-2xl p-5 pb-10"> Ассортимент </h1>
            <div className="grid grid-cols-2 gap-4 mx-auto container items-center ">

                <div className="items-center mx-auto p-5">
                    <img className="mx-8" src="https://img.icons8.com/cotton/64/000000/car--v3.png" alt="Автозапчасти"/>
                    <p className="text-xl">Автозапчасти</p>
                </div>

                <div className="items-center mx-auto p-5">
                    <img className="mx-4" src="https://img.icons8.com/cotton/64/000000/fire-extinguisher--v1.png" alt="Аксессуары"/>
                    <p className="text-xl">Аксессуары</p>
                </div>

                <div className="items-center mx-auto p-5">
                    <img className="mx-4" src="https://img.icons8.com/cotton/64/000000/engine-oil.png" alt="Автохимия"/>
                    <p className="text-xl">Автохимия</p>
                </div>

                <div className="items-center mx-auto p-5">
                    <img className="mx-8" src="https://img.icons8.com/cotton/64/000000/toolbox.png" alt="Инструменты"/>
                    <p className="text-xl">Инструменты</p>
                </div>

            </div>

        </div>
    );
}

export default Products;