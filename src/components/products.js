import parts from '../images/products.svg';

export default function Products() {
    return <section id="products" className="catalog-section">
        <h2>Ассортимент</h2>
        <ul className="product-grid">
            {[['brakes', 'Автозапчасти'], ['mats', 'Аксессуары'], ['oil', 'Автохимия'], ['tools', 'Инструменты']].map(([icon, title]) =>
                <li key={icon}>
                    <svg aria-hidden="true" viewBox="0 0 160 100"><use href={parts + '#' + icon}/></svg>
                    <span>{title}</span>
                </li>
            )}
        </ul>
    </section>;
}
