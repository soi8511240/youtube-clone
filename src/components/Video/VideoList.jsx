import React from 'react';
import VideoThum from './VideoThum';
import { useQuery } from '@tanstack/react-query';
import { v4 as uuidv4 } from 'uuid';

export default function VideoList({ text }) {
  const {
    isLoading,
    error,
    data: videoList,
  } = useQuery(
    ['videoList', `${text ? text : 'mostPopular'}`],
    async () => {
      return fetch(
        `https://www.googleapis.com/youtube/v3/search?q=${
          text ? text : ''
        }&chart=mostPopular}&key=AIzaSyCuykthN9JYnA2j7kVUKxgK8wQAAjPBrv8&maxResults=20&part=snippet&regionCode=KR&type=video`
      ).then((res) => res.json());
    },
    { staleTime: 1000 * 60 * 10 }
  );
  if (isLoading) return 'Loading...';
  if (error) return `error! ${error}`;
  return (
    <ul>
      {videoList.items.map((v) => (
        <li key={uuidv4()}>
          <VideoThum
            id={v.id.videoId}
            video={v.snippet}
          />
        </li>
      ))}
    </ul>
  );
}
