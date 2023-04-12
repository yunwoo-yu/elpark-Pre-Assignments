import { useEffect, useState } from 'react';
import { MusicStoreData } from '../types/types';

const getMusicData = async () => {
  const response = await fetch('https://itunes.apple.com/us/rss/topalbums/limit=100/json');
  const data = response.json();

  return data;
};

const useGetMusicData = () => {
  const [musicListData, setMusicListData] = useState<MusicStoreData>();

  useEffect(() => {
    getMusicData().then((data) => {
      setMusicListData(data.feed);
    });
  }, []);

  const onClickSortedList = (type: 'ASCENDING' | 'DESCENDING') => {
    if (type === 'ASCENDING') {
      setMusicListData(
        (prev) =>
          prev && {
            ...prev,
            entry: [
              ...prev.entry.sort((a, b) => a['im:name'].label.localeCompare(b['im:name'].label)),
            ],
          }
      );
    } else {
      setMusicListData(
        (prev) =>
          prev && {
            ...prev,
            entry: [
              ...prev.entry.sort((a, b) => b['im:name'].label.localeCompare(a['im:name'].label)),
            ],
          }
      );
    }
  };

  return { musicListData, setMusicListData, onClickSortedList };
};

export default useGetMusicData;
