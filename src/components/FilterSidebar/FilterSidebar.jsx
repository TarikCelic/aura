import { useSearchParams } from 'react-router-dom';

export default function FilterSidebar() {
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

  return (
    <div>
      <h3>Filteri</h3>

      <div>
        <label>RAM Memorija:</label>
        <select
          value={searchParams.get('ram') || ''}
          onChange={(e) => handleFilterChange('ram', e.target.value)}
        >
          <option value="">Sve</option>
          <option value="4">4 GB</option>
          <option value="6">6 GB</option>
          <option value="8">8 GB</option>
          <option value="16">16 GB</option>
        </select>
      </div>

      <button onClick={() => setSearchParams({})}>Očisti sve</button>
    </div>
  );
}
