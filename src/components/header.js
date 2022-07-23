function Header(){
    return(
        <div className="container bg-indigo-900 text-white mx-auto items-center">
            <div className="flex flex-row justify-between items-center h-12 mx-36">
                <div className="bg-amber-200 w-2 h-5"> LOGO</div>

                <ul className="hidden sm:flex gap-10">
                    <li>Преимущества</li>
                    <li>Услуги</li>
                    <li>Услуги</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;