import Gaz from '../images/gaz.svg';
import Lada from '../images/lada.svg';
import Uaz from '../images/uaz.svg';

export default function Brands() {
    return <section id="brands" className="catalog-section">
        <h2>Бренды</h2>
        <ul className="brand-strip">
            {[[Lada, 'LADA'], [Gaz, 'ГАЗ'], [Uaz, 'УАЗ']].map(([image, brand]) =>
                <li key={brand}><img src={image} alt=""/><span>{brand}</span></li>
            )}
        </ul>
    </section>;
}
