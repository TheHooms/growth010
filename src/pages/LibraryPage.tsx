import React, { useState, useMemo } from 'react';
import { books } from '../data/books';
import { LibraryFilters } from '../types/library';
import BookCard from '../components/BookCard';
import LibraryFiltersComponent from '../components/LibraryFilters';

const LibraryPage: React.FC = () => {
  const [filters, setFilters] = useState<LibraryFilters>({
    search: '',
    genre: '',
    author: '',
    availability: 'all'
  });

  const filteredBooks = useMemo(() => {
    return books.filter(book => {
      const matchesSearch = !filters.search || 
        book.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        book.author.toLowerCase().includes(filters.search.toLowerCase());

      const matchesGenre = !filters.genre || book.genre === filters.genre;
      const matchesAuthor = !filters.author || book.author === filters.author;
      const matchesAvailability = filters.availability === 'all' || 
        (filters.availability === 'available' && book.available) ||
        (filters.availability === 'borrowed' && !book.available);

      return matchesSearch && matchesGenre && matchesAuthor && matchesAvailability;
    });
  }, [filters]);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Library</h1>
          <p className="text-xl text-gray-600 mt-2">
            Browse our collection of professional development resources
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <LibraryFiltersComponent 
              filters={filters}
              onFilterChange={setFilters}
            />
          </div>

          <div className="lg:col-span-3">
            {filteredBooks.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBooks.map(book => (
                  <BookCard key={book.id} book={book} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
                <p className="text-gray-600">No books found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryPage;