import React from 'react';

const GenreFilter = ({selectedGenre, onGenreChange, allGenres}) => {

  const toggleGenre = (genre) => {
    const updated = selectedGenre.includes(genre)
      ? selectedGenre.filter(g => g !== genre)
      : [...selectedGenre, genre];

    onGenreChange(updated);
  };


  return (
      <div className="genre-filter">
        {allGenres.map(genre => (
          <button
            key={genre}
            onClick={()=> toggleGenre(genre)}
            className={selectedGenre.includes(genre) ? 'genre-button active' : 'genre-button'}>
              {genre}</button>
        ))}
      </div>
  );
  };

export default GenreFilter;



