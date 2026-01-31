import { useParams, useSearchParams } from 'react-router-dom';
import products from '../../data/products';
import FilterSidebar from '../../components/FilterSidebar/FilterSidebar';
import ProductCard from '../../components/ProductCard/ProductCard';
import style from './Category.module.css';
export default function CategoryPage() {
  const { category } = useParams();
  const [searchParams] = useSearchParams();

  const ramFilter = searchParams.get('ram');
  const minPrice = searchParams.get('minPrice');

  const filteredProducts = products.filter((p) => {
    const isCorrectCategory = p.category === category;
    const matchesRam = ramFilter ? p.specs.ram === ramFilter : true;
    const matchesPrice = minPrice ? p.specs.price >= Number(minPrice) : true;

    return isCorrectCategory && matchesRam && matchesPrice;
  });

  return (
    <main>
      <h1>{category.toUpperCase()}</h1>
      <div className={style.productGrid}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>Nema proizvoda koji odgovaraju filterima.</p>
        )}
      </div>
    </main>
  );
}
