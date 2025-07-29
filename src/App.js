import React, { useRef, useState } from 'react';
import Navbar from './components/Navbar';
import VideoCard from './components/VideoCard';
import './styles/index.css';
import videos from './data/videos';
import GenreFilter from './components/GenreFilter';

function App() {

  const [selectedGenre, setSelectedGenre] = useState([]);
  const videoRefs = useRef([]);

  const [isGenreOpen, setIsGenreOpen] = useState(false);

  const handleVideoClick = (index) => {
    videoRefs.current.forEach((video, i) => {
      if (video && i !== index) {
        video.pause();
      }
  });

  const video = videoRefs.current[index];
  if (video) {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }
  };

  const sortedVideos = [...videos].sort((a, b) =>  new Date(b.date) - new Date(a.date));
  console.log(videos.map(v => v.date));
  console.log(sortedVideos.map(v => v.date));

  const allGenres = Array.from(new Set(videos.flatMap(video => video.genre)));

  const handleGenreChange = (genres) => {
    setSelectedGenre(genres);
  }
  
  const filteredVideos = sortedVideos.filter(video =>
    selectedGenre.length === 0 || 
    video.genre.some(videoGenre =>
      selectedGenre.some(selected =>
          videoGenre.toLowerCase().includes(selected.toLowerCase())
      )
    )
  );


  return (
    <div className="App">
      <div className="page-wrapper">
      <header className="App-header">
        <Navbar toggleGenre={() => setIsGenreOpen(prev => !prev)}/>
          {isGenreOpen && (
            <GenreFilter selectedGenre={selectedGenre} onGenreChange={handleGenreChange} allGenres={allGenres}/>
          )}
        <div className="video-grid">
          {filteredVideos.map((video, index) => (
            <VideoCard 
            key={video.id} 
            video={video}
            videoRef={(el) => (videoRefs.current[index] = el)}
            onVideoClick={() => handleVideoClick(index)}
            withBackground={index % 2 === 1 ? index + 1 : null}
             />
          ))}
        </div>
      </header>
    </div>
    </div>
  );
}

export default App;
