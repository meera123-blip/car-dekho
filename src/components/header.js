import React, { useState } from 'react';

const Header = ({ cars, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <header className="p-4 shadow-md bg-white">
      <div className="container mx-auto flex items-center justify-between">
        
        <div className="w-64 relative">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full py-2 px-4 bg-gray-200 rounded-full pl-10 focus:outline-none focus:shadow-outline"
            style={{ maxWidth: '500px' }}
          />
          <svg
            className="h-6 w-6 text-gray-500 absolute left-3 top-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 17l-5-5 5-5"
            />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
