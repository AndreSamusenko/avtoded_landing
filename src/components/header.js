function Header() {
    return (
        <div className="container bg-white mx-auto py-6">
            <div className="flex items-center justify-between items-center ">
                <div className="bg-blue-500 w-2 h-5"> АВТОДЕД</div>
                <ul className="hidden sm:flex lg:gap-10 gap-1 lg:gap-5 font-bold">
                    <a href="#brands"><li className="px-2 rounded-md hover:bg-gray-100">Бренды</li></a>
                    <a href="#products"><li className="px-2 rounded-md hover:bg-gray-100">Ассортимент</li></a>
                    <a href="#pros"><li className="px-2 rounded-md hover:bg-gray-100">Преимущества</li></a>
                    <a href="#location"><li className="px-2 rounded-md hover:bg-gray-100">Контакты</li></a>
                    <a href="#ask"><li className="hidden md:block px-2 rounded-md hover:bg-gray-100">Задать вопрос</li></a>
                </ul>
            </div>
        </div>
    );
}

export default Header;