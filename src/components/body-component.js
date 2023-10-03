


import React from 'react';
import Data from '../Data.json';
import CardComponent from './card-component';
import { Link } from 'react-router-dom';
import Header from './header';
import { useSearch } from './useSearch';
import { usePagination } from './usePagination';

const BodyComponent = () => {
  const { searchTerm, filteredData, handleSearch } = useSearch(Data);
  const { currentPage, totalPages, paginatedData, nextPage, prevPage, goToPage } = usePagination(filteredData, 6);

  return (
    <>
      <Header cars={Data} onSearch={handleSearch} />
      <div className="flex flex-wrap -mx-4 p-8 bg-slate-100">
        {paginatedData.length === 0 ? (
          <div>No data found</div>
        ) : (
          paginatedData.map((car, index) => (
            <CardComponent key={index} car={car} />
          ))
        )}
      </div>
      <div>
        <nav>
          <ul className="flex p-7 justify-center">
            <li className=' mr-2'>
              <Link
                to={`/page/${currentPage - 1}`}
                onClick={() => prevPage()}
                className={`px-3 py-2 rounded-lg ${
                  currentPage === 1 ? 'bg-gray-300' : 'bg-blue-500 hover:bg-blue-700'
                } text-white ${currentPage === 1 ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                disabled={currentPage === 1}
              >
                Prev
              </Link>
            </li>
            {Array.from({ length: totalPages }).map((_, i) => (
              <li className={`mr-2 ${currentPage === i + 1 ? 'active' : ''}`} key={i}>
                <Link
                  to={`/page/${i + 1}`}
                  onClick={() => goToPage(i + 1)}
                  className={`px-3 py-2 rounded-lg ${
                    currentPage === i + 1
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-300 text-gray-700 hover:bg-blue-500 hover:text-white'
                  }`}
                >
                  {i + 1}
                </Link>
              </li>
            ))}
            <li  className=' mr-2'>
              <Link
                to={`/page/${currentPage + 1}`}
                onClick={() => nextPage()}
                className={`px-3 py-2 rounded-lg ${
                  currentPage === totalPages
                    ? 'bg-gray-300'
                    : 'bg-blue-500 hover:bg-blue-700'
                } text-white ${currentPage === totalPages ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                disabled={currentPage === totalPages}
              >
                Next
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default BodyComponent;
