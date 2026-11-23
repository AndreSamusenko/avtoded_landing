import {useState} from 'react';

function Header() {
    const [open, setOpen] = useState(false);
    return (
        <header className="site-header" onKeyDown={event => {
            if (event.key === 'Escape' && open) {
                setOpen(false);
                event.currentTarget.querySelector('button').focus();
            }
        }}>
            <a className="wordmark" href="#top">АВТОДЕД</a>
            <button className="menu-toggle" type="button" aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
                    aria-controls="navigation" aria-expanded={open} onClick={() => setOpen(!open)}>
                <span/><span/><span/>
            </button>
            <nav id="navigation" aria-label="Основная навигация" className={open ? 'is-open' : ''}>
                {[['brands', 'Бренды'], ['products', 'Ассортимент'], ['location', 'Контакты'],
                    ['pros', 'Преимущества'], ['ask', 'Задать вопрос']].map(([id, label]) =>
                    <a key={id} href={'#' + id} onClick={() => setOpen(false)}>{label}</a>
                )}
            </nav>
        </header>
    );
}
export default Header;
