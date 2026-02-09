import { useParams, useSearchParams } from "react-router-dom";
import products from "../../data/products";
import FilterSidebar from "../../components/FilterSidebar/FilterSidebar";
import ProductCard from "../../components/ProductCard/ProductCard";
import style from "./Category.module.css";
import { useState } from "react";

import sort from "../../assets/icons/sort.svg";
import filter from "../../assets/icons/filter.svg";

export default function CategoryPage() {
  const [filtersOpened, setFilterOpened] = useState(false);
  const { category } = useParams();
  const [searchParams] = useSearchParams();

  const ramFilter = searchParams.get("ram");
  const minPrice = searchParams.get("minPrice");

  const filteredProducts = products.filter((p) => {
    const isCorrectCategory = p.category === category;
    const matchesRam = ramFilter ? p.specs.ram === ramFilter : true;
    const matchesPrice = minPrice ? p.specs.price >= Number(minPrice) : true;

    return isCorrectCategory && matchesRam && matchesPrice;
  });
  //comment}
  function handleFilters() {
    setFilterOpened((prev) => !prev);
  }

  return (
    <>
      {filtersOpened && (
        <FilterSidebar activeCategory={category} onClose={handleFilters} />
      )}
      <main>
        <h1>{category.toUpperCase()}</h1>
        <div className={style.filterBox}>
          <div>
            <img src={sort} width={30} alt="" />
            Sort
          </div>
          <div onClick={handleFilters}>
            Filter
            <img src={filter} width={30} alt="" />
          </div>
        </div>
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
    </>
  );
}
