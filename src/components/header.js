function Header() {
    return (
        <div className="container bg-white mx-auto py-6">
            <div className="flex items-center justify-between items-center ">
                <div className="bg-blue-500 w-2 h-5"> LOGO</div>
                <ul className="hidden sm:flex lg:gap-10 gap-5 font-bold">
                    <a><li className="px-2 rounded-md hover:bg-gray-100">Бренды</li></a>
                    <a><li className="px-2 rounded-md hover:bg-gray-100">Ассортимент</li></a>
                    <a><li className="px-2 rounded-md hover:bg-gray-100">Преимущества</li></a>
                    <a><li className="px-2 rounded-md hover:bg-gray-100">Контакты</li></a>
                    <a><li className="px-2 rounded-md hover:bg-gray-100">Задать вопрос</li></a>
                </ul>
            </div>
        </div>
    );
}

export default Header;