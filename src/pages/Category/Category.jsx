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
  const cpuFilter = searchParams.get("cpu");
  const gpuFilter = searchParams.get("gpu");
  const storageFilter = searchParams.get("storage");
  const mbFilter = searchParams.get("mb");
  const sysFilter = searchParams.get("sys");
  const minPrice = searchParams.get("minPrice");
  const maxPrice = searchParams.get("maxPrice");
  const batteryFilter = searchParams.get("battery");
  const brandFilter = searchParams.get("brand");
  const displayFilter = searchParams.get("display");
  const displayTypeFilter = searchParams.get("displayType");
  const displayRefreshRate = searchParams.get("refresh-rate");

  const resolutionFilter = searchParams.get("resolution");
  const panelFilter = searchParams.get("panel");
  const sizeFilter = searchParams.get("size");

  const filteredProducts = products.filter((p) => {
    const matchesResolution = resolutionFilter
      ? p.specs.resolution === resolutionFilter
      : true;
    const matchesPanel = panelFilter ? p.specs.panel === panelFilter : true;
    const matchesSize = sizeFilter ? p.specs.size === sizeFilter : true;

    const matchesDisplay = displayFilter
      ? p.specs.display === displayFilter
      : true;
    const matchesDType = displayTypeFilter
      ? p.specs.displayType === displayTypeFilter
      : true;
    const matchesRRate = displayRefreshRate
      ? p.specs.refreshRate === displayRefreshRate
      : true;

    const isCorrectCategory = p.category === category;
    const matchesRam = ramFilter ? p.specs.ram === ramFilter : true;
    const matchesCPU = cpuFilter ? p.specs.procesori === cpuFilter : true;
    const matchesGPU = gpuFilter ? p.specs.graficke === gpuFilter : true;
    const matchesSTORAGE = storageFilter
      ? p.specs.storage === storageFilter
      : true;
    const matchesMB = mbFilter ? p.specs.maticne === mbFilter : true;
    const matchesOS = sysFilter ? p.specs.os === sysFilter : true;
    const matchesPrice = minPrice ? p.price >= Number(minPrice) : true;
    const matchesPrice2 = maxPrice ? p.price <= Number(maxPrice) : true;
    const matchesBattery = batteryFilter
      ? p.specs.battery === batteryFilter
      : true;
    const matchesBrand = brandFilter ? p.brand === brandFilter : true;

    return (
      isCorrectCategory &&
      matchesRam &&
      matchesPrice &&
      matchesCPU &&
      matchesGPU &&
      matchesMB &&
      matchesSTORAGE &&
      matchesOS &&
      matchesPrice2 &&
      matchesBattery &&
      matchesBrand &&
      matchesRRate &&
      matchesDType &&
      matchesDisplay &&
      matchesResolution &&
      matchesSize &&
      matchesPanel
    );
  });

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
