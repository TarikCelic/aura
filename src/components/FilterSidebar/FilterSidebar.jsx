import { useSearchParams } from "react-router-dom";
import style from "./FilterSidebar.module.css";
import leaveFilter from "../../assets/icons/x.svg";
import { desktopFilters } from "../../data/filterUtils";
const filterOptions = [
  {
    oblast: "desktop",
    filteri: [
      {
        choosen: "ram",
        labelF: "RAM Memorija",
        opcije: desktopFilters.ramMemorije,
      },
      {
        choosen: "cpu",
        labelF: "Procesor",
        opcije: desktopFilters.procesori,
      },
      {
        choosen: "gpu",
        labelF: "Graficka",
        opcije: desktopFilters.graficke,
      },
      {
        choosen: "storage",
        labelF: "Memorija",
        opcije: desktopFilters.storage,
      },
      {
        choosen: "mb",
        labelF: "Maticna",
        opcije: desktopFilters.maticne,
      },
      {
        choosen: "sys",
        labelF: "Sistem",
        opcije: desktopFilters.sistem,
      },
    ],
  },
  {
    oblast: "monitori",
    filteri: [],
  },
];

const FilterOption = ({
  labelF,
  choosen,
  options,
  currentVal,
  onFilterChange,
}) => {
  return (
    <div className={style.filterOption}>
      <label>{labelF}:</label>
      <select
        value={currentVal || ""}
        onChange={(e) => onFilterChange(choosen, e.target.value)}
      >
        <option value="">Sve</option>
        {options.map((e) => (
          <option key={e.vrijednost} value={e.vrijednost}>
            {e.fName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default function FilterSidebar({ activeCategory, onClose }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleFilterChange = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    setSearchParams(newParams);
  };

  const currentCategoryData = filterOptions.find(
    (item) => item.oblast === activeCategory,
  );

  return (
    <div className={style.filterPopUp}>
      <div className={style.filterFirstRow}>
        <h3>Filteri</h3>
        <img
          src={leaveFilter}
          width={30}
          alt="Zatvori"
          onClick={onClose}
          style={{ cursor: "pointer" }}
        />
      </div>

      {currentCategoryData ? (
        currentCategoryData.filteri.map((filter) => (
          <FilterOption
            key={filter.choosen}
            labelF={filter.labelF}
            choosen={filter.choosen}
            options={filter.opcije}
            currentVal={searchParams.get(filter.choosen)}
            onFilterChange={handleFilterChange}
          />
        ))
      ) : (
        <p>Nema filtera za ovu kategoriju.</p>
      )}

      <button onClick={() => setSearchParams({})}>Očisti sve</button>
    </div>
  );
}
