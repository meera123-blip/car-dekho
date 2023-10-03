import { useState } from 'react';

export const useSearch = (initialData) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(initialData);

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    filterData(searchTerm);
  };

  const filterData = (searchTerm) => {
    if (searchTerm.trim() === '') {
      setFilteredData(initialData);
    } else {
      const filtered = initialData.filter((car) =>
        car.brand.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };

  return { searchTerm, filteredData, handleSearch };
};
