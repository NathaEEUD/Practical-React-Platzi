import { useState, useEffect} from 'react';

const useInitialState = (API) => {
  const [ videos, setVideos ] = useState({ estado: false });

  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => setVideos({...data, estado: true}));
  }, []);
  return videos;
};

export default useInitialState;

