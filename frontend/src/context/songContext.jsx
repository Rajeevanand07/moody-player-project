import { createContext, useState } from 'react';

export const SongContext = createContext();

export const SongProvider = ({ children }) => {
  const [songs, setSongs] = useState([]);
  const [moodSongs, setMoodSongs] = useState([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const getCurrentSongs = () => {
    const currentPath = window.location.pathname;

    if (currentPath === '/songs') {
      return moodSongs;
    } else {
      return songs;
    }
  };

  const getCurrentSetSongs = () => {
    const currentPath = window.location.pathname;

    if (currentPath === '/songs') {
      return setMoodSongs;
    } else {
      return setSongs;
    }
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const playSong = (index) => {
    setCurrentSongIndex(index);
    setIsPlaying(true);
  };

  const pauseSong = () => {
    setIsPlaying(false);
  };

  const nextSong = () => {
    const currentSongs = getCurrentSongs();
    if (currentSongs.length === 0) return;

    if ( currentSongIndex >= currentSongs.length - 1) {
      setCurrentSongIndex(0);
    } else {
      setCurrentSongIndex(currentSongIndex + 1);
    }
  };

  const previousSong = () => {
    const currentSongs = getCurrentSongs();
    if (currentSongs.length === 0) return;

    if (currentSongIndex <= 0) {
      setCurrentSongIndex(currentSongs.length - 1);
    } else {
      setCurrentSongIndex(currentSongIndex - 1);
    }
  };

  return (
    <SongContext.Provider value={{
      songs,
      moodSongs,
      currentSongIndex,
      isPlaying,
      setSongs,
      setMoodSongs,
      setCurrentSongIndex,
      getCurrentSongs,
      getCurrentSetSongs,
      togglePlayPause,
      playSong,
      pauseSong,
      nextSong,
      previousSong
    }}>
      {children}
    </SongContext.Provider>
  );
};